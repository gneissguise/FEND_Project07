import $ from 'jquery'

//TODO: Add auth token and content-type headers to ApolloClient request

// Client ID
// RubuxXa9cuE7Dz1E5aoiJA
//
// API Key
// EhYmnMVtdRiyXX1HjAOptnV9-rpIvaQS_WHxz-jRbyk2Wzfe6kWSlAZZqJjkXiqxPRuc-xCDMCzhsdvbdkZybFdcINUvDvfsYph7UPGaZ3dOcBLD89Ykou8OPW26W3Yx
//
//

// $ curl -X POST -H "Authorization: Bearer ACCESS_TOKEN" -H "Content-Type: application/graphql" https://api.yelp.com/v3/graphql --data '
// {
//     business(id: "garaje-san-francisco") {
//         name
//         id
//         alias
//         rating
//         url
//     }
// }'

const YelpApi = (query) => {
  // $.ajax({
  //   url: '/v3/businesses/search',
  //   // dataType: 'jsonp',
  //   // jsonpCallback: 'cb',
  //   //crossDomain: true,
  //   data: {
  //     latitude: query.lat,
  //     longitude: query.lng
  //   },
  //   headers: {
  //     'authorization': 'Bearer EhYmnMVtdRiyXX1HjAOptnV9-rpIvaQS_WHxz-jRbyk2Wzfe6kWSlAZZqJjkXiqxPRuc-xCDMCzhsdvbdkZybFdcINUvDvfsYph7UPGaZ3dOcBLD89Ykou8OPW26W3Yx',
  //   },
  //   cache: true
  // })
  // .then((result) => {
  //   console.log(result)
  //   return result
  // })
  // .catch((error) => {
  //   console.log(error)
  //   return error
  // })
  const url = new URL(`${window.location.protocol}//${window.location.hostname}:${window.location.port}/v3/businesses/search`)
  const params = {latitude: query.lat, longitude: query.lng, limit: 1 }

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  fetch(url, {
    // method: "POST", // *GET, POST, PUT, DELETE, etc.
    //mode: "no-cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, same-origin, *omit
    headers: {
      'authorization': 'Bearer EhYmnMVtdRiyXX1HjAOptnV9-rpIvaQS_WHxz-jRbyk2Wzfe6kWSlAZZqJjkXiqxPRuc-xCDMCzhsdvbdkZybFdcINUvDvfsYph7UPGaZ3dOcBLD89Ykou8OPW26W3Yx'
    },
    //referrer: "no-referrer", // no-referrer, *client
    // data: {
    //   latitude: query.lat,
    //   longitude: query.lng
    // } // body data type must match "Content-Type" header
  })
  .then(response => response.json())
  .then(data => console.log(`alias: '${data.businesses[0].alias}', id: '${data.businesses[0].id}', name: '${data.businesses[0].name}'`))
  .catch(error => console.log(error))
}

export default YelpApi;
