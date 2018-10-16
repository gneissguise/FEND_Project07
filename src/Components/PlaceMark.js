import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CircularProgress from '@material-ui/core/CircularProgress';
import YelpApi from './YelpApi'
// import Food from '@material-ui/icons/LocalDining'
// import Drink from '@material-ui/icons/LocalBar'
// import Cafe from '@material-ui/icons/LocalCafe'

//TODO: each location should have its own route
const Info = (props) => {
  const yelpData = props.yelpData
  return (
    <div>
      <div style={{
        background: `url(${yelpData.image_url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '16rem',
        height: '8rem',
        margin: 'auto'
      }}></div>
      <p>Rating: {yelpData.rating}</p>
      <p>Price: {yelpData.price}</p>
      <p>Address: {yelpData.location.display_address[0]},</p>
      <p>{yelpData.location.display_address[1]}</p>
      <a href={yelpData.url} title="Yelp profile">More info..</a>
    </div>
  )
}

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
