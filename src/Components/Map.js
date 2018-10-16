import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import PlaceMark from './PlaceMark'
import { MAP_OPTIONS, MAP_KEY } from '../constants'
import './Map.css'

const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`

const PhxMap = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    google={window.google}
    defaultZoom={13.5}
    defaultCenter={{ lat: 33.494886, lng: -112.073881 }}
    options={MAP_OPTIONS}
  >
    {props.markers.map((m) => m.visible ? <PlaceMark google={window.google} marker={m} key={m.id} /> : null)}
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
        googleMapURL={mapUrl}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `90vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={this.props.markers} />
    )
  }
}

export default Map
