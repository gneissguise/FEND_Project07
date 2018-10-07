import ApolloClient from 'apollo-boost'

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


const YelpClient = new ApolloClient({
  uri: 'https://api.yelp.com/v3/graphql'
});

export default YelpClient;
