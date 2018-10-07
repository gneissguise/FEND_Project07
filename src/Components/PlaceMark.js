import React from 'react'
import { Marker } from 'react-google-maps'
import Food from '@material-ui/icons/LocalDining'
import Drink from '@material-ui/icons/LocalBar'
import Cafe from '@material-ui/icons/LocalCafe'

//TODO: Create a yelp component..

const PlaceMark = (props) =>
  <Marker position={props.position} key={props.id} />

export default PlaceMark
