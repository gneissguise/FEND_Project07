import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CircularProgress from '@material-ui/core/CircularProgress';
import YelpApi from './YelpApi'
import { LOCALSTORAGE } from '../constants'

// Stateless component that displays info for the <InfoBox>
const Info = (props) => {
  const yelpData = props.yelpData
  return (
    <>
      <figure style={{
        width: '100%',
        height: '10rem',
        margin: 'auto',
        padding: 0
      }}><img src={yelpData.image_url} alt={yelpData.name} style={{ height: '100%', maxWidth: '100%' }} /></figure>
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
      yelpData: null
    }

    this.onToggleOpen = this.onToggleOpen.bind(this)
    this.handleYelpApi = this.handleYelpApi.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // Handles the loading of yelp data.  Checks localstorage first, then hits api
  handleYelpApi() {
    if (!this.state.yelpData) {
      let yelpData = JSON.parse(localStorage.getItem(LOCALSTORAGE)) || []
      const matched = yelpData.find(y => y.alias === this.props.marker.id)

      if (matched) {
        this.setState({
          yelpData: matched
        })
      }
      else {
        YelpApi(this.props.marker.id)
        .done(data => {
          this.setState({
            yelpData: data
          })
          yelpData = JSON.parse(localStorage.getItem(LOCALSTORAGE)) || []
          yelpData.push(data)
          localStorage.setItem(LOCALSTORAGE, JSON.stringify(yelpData))
        })
        .fail(error => alert(`An error occurred connecting to yelp: ${error}`))
      }
    }
  }

  // Toggles the opening of the <InfoBox>
  onToggleOpen() {
    this.props.toggleOpen(this.props.marker.id)
  }

  handleClick(event) {
    this.props.toggleOpen(this.props.marker.id)
  }

  render() {
    const google = this.props.google
    const marker = this.props.marker
    return(
      <Marker
        id={`marker-${marker.id}`}
        animation={google.maps.Animation.DROP}
        defaultAnimation={google.maps.Animation.BOUNCE}
        key={`marker-${marker.id}`}
        position={marker.position}
        title={marker.name}
        onClick={this.handleClick} >
        {marker.isOpen ?
          <InfoBox
            onCloseClick={this.onToggleOpen}
            onDomReady={this.handleYelpApi}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
            className='infoBox'
          >
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
