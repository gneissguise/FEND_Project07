import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

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
const httpLink = new HttpLink({ uri: 'https://api.yelp.com/v3/graphql' })

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('auth_token')

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : 'EhYmnMVtdRiyXX1HjAOptnV9-rpIvaQS_WHxz-jRbyk2Wzfe6kWSlAZZqJjkXiqxPRuc-xCDMCzhsdvbdkZybFdcINUvDvfsYph7UPGaZ3dOcBLD89Ykou8OPW26W3Yx'
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const YelpApi = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

export default YelpApi;
