import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import PlaceMark from './PlaceMark'
import './Map.css'

const MapOptions = {
  mapTypeControl: false,
  fullscreenControl: false,
  styles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ]}

const PhxMap = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={13.5}
    defaultCenter={{ lat: 33.494886, lng: -112.073881 }}
    options={MapOptions}
  >
    {props.markers.map((m) => <PlaceMark position={m.position} key={m.id} />)}
  </GoogleMap>
))

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <PhxMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjwCGmLJQuWEtnfgsIw3ThLbolxrXLrX4&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={this.props.markers} />
    )
  }
}

export default Map
