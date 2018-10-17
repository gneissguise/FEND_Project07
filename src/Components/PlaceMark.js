import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CircularProgress from '@material-ui/core/CircularProgress';
import YelpApi from './YelpApi'

// Stateless component that displays info for the <InfoBox>
//TODO: each location should have its own route
const Info = (props) => {
  const yelpData = props.yelpData
  return (
    <>
      <figure style={{
        background: `url(${yelpData.image_url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '10rem',
        margin: 'auto',
        padding: 0
      }}></figure>
      <figcaption className="details">
        <div style={{
          width: '100%',
          margin: '0.5rem 0'
        }}>
          <span><strong>Rating: {yelpData.rating}/5</strong></span>
          <span><strong>Price: {yelpData.price}</strong></span>
        </div>
        <address style={{ marginBottom: '0.5rem' }}>
          {yelpData.location.display_address.map((a, i) => <div key={`addr${i}`}>{a}</div>)}
          <div>{yelpData.phone}</div>
        </address>
        <a href={yelpData.url}
          title="Yelp profile"
          target="_blank"
          rel="noopener noreferrer">Visit Yelp for more details!</a>
      </figcaption>
    </>
  )
}

// Google map marker implementation, complete with yelp data and toggleable visibility state
class PlaceMark extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      yelpData: null
    }

    this.onToggleOpen = this.onToggleOpen.bind(this)
  }

  onToggleOpen() {
    if (!this.state.yelpData) {
      YelpApi(this.props.marker.id)
      .done(data => {
        this.setState({
          yelpData: data
        })
      })
    }
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const google = this.props.google
    const marker = this.props.marker
    return(
      <Marker
        animation={google.maps.Animation.DROP}
        key={marker.id}
        position={marker.position}
        title={marker.name}
        onClick={this.onToggleOpen} >
        {this.state.isOpen ?
          <InfoBox
            onCloseClick={this.onToggleOpen}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
            className='infoBox'>
            <div>
              <IconButton
                onClick={this.onToggleOpen}
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0'
                }}>
                <CloseIcon style={{
                  fontSize: 12
                }} />
              </IconButton>
              <h3>{marker.name}</h3>
              {this.state.yelpData == null ?
              <CircularProgress /> :
              <Info yelpData={this.state.yelpData} />}
            </div>
          </InfoBox>
        : null}
      </Marker>
    )
  }
}

export default PlaceMark
