import React from 'react'
import Marker from 'react-google-maps'
import Food from '@material-ui/icons/LocalDining'
import Drink from '@material-ui/icons/LocalBar'
import Cafe from '@material-ui/icons/LocalCafe'

//TODO: Create a yelp component..

const PlaceMark = (props) => {
  const service = new window.google.maps.places.PlacesService(window.google.map);
  service.findPlaceFromQuery({
    query: props.name,
    fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
    locationBias: { lat: props.position.lat, lng: props.position.lng }
  }, (request, results) => console.log("request", request, "results", results))
  console.log(service)
  return(
    <Marker position={props.position} key={props.id} />
  )
 }

export default PlaceMark
