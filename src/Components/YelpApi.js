import $ from 'jquery'
import { YELP_KEY } from '../constants'

// Simple yelp api wrapper.  Url is mapped to localhost to avoid CORS issue
export default (id) => {
  return $.ajax({
    url: new URL(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/v3/businesses/${id}`),
    headers: {
      'authorization': `Bearer ${YELP_KEY}`
    }
  })
}
