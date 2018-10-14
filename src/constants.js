export const MARKERS = [
  { position: { lat: 33.503768, lng:-112.1004451 }, name: 'Da Vang Restaurant', id: "c5ee758f-a1d2-4eef-93e4-f49c909f4fc3" },
  { position: { lat: 33.4974684, lng:-112.0882768 }, name: 'Copper Star Coffee', id: "f9494b83-1927-4ce6-b86f-a3187002a1a3" },
  { position: { lat: 33.4960874, lng:-112.1024997 }, name: 'My Mother\'s Restaurant', id: "9eb68efa-8a38-4889-9804-200f77da753f" },
  { position: { lat: 33.4713301, lng:-112.0691944 }, name: 'The Coronado PHX', id: "5f0f47d2-57c3-4291-85df-bc683b534a58" },
  { position: { lat: 33.469973, lng:-112.0697444 }, name: 'Green New American Vegetarian', id: "8cddb283-5d2f-46c0-9fd3-a38565fd75f2" },
  { position: { lat: 33.4701168, lng:-112.0659736 }, name: 'Nami', id: "e14219d1-a752-47a9-b575-1018e139100c" },
  { position: { lat: 33.4868713, lng:-112.0655152 }, name: 'Gadzooks Enchiladas and Soup', id: "cd91ada5-aa6c-4e14-abed-b9de3593035a" },
  { position: { lat: 33.5005108, lng:-112.0762969 }, name: 'Lux Central', id: "983ff322-6af7-465a-bea7-2466f96311ab" },
  { position: { lat: 33.4499109, lng:-112.075519 }, name: 'Nook Kitchen Downtown', id: "dcbbba48-b841-4558-a083-9a11fe729bd3" },
  { position: { lat: 33.510403, lng:-112.0741477 }, name: 'Lou Maltnatis Pizzeria', id: "b7740e06-1625-46dd-81a6-bee29e09d937" },
  { position: { lat: 33.5106177, lng:-112.0743003 }, name: 'Shake Shack', id: "25cf2949-c901-4910-8231-4dfeb84adc33" },
  { position: { lat: 33.4645353, lng:-112.0655877 }, name: 'Hanny\'s', id: "8ea90d43-1233-48e6-9f85-bef3734b748e" },
  { position: { lat: 33.4470496, lng:-112.0740365 }, name: 'Bitter & Twisted Cocktail Parlour', id: "fa2f6459-fff8-4a0e-a319-0df6972e3bfa" },
  { position: { lat: 33.4474617, lng:-112.0731486 }, name: 'The Arrogant Butcher', id: "71d3995d-a341-47fc-b156-790a9ed9308d" },
  { position: { lat: 33.4478612, lng:-112.0712546 }, name: 'The Whining Pig', id: "b0a87ce3-c4c5-4855-879c-97706dae75df" },
  { position: { lat: 33.530407, lng:-112.0472087 }, name: 'Rokerij', id: "ac5692c7-360b-4294-8eb8-23593d685824" },
  { position: { lat: 33.4654571, lng:-112.082299 }, name: 'Ahipoki Bowl', id: "7c6e3aa5-7adc-4178-8bd7-839278332e5b" },
  { position: { lat: 33.465386, lng:-112.0822091 }, name: 'Vovomeena', id: "3b8d06d0-a700-4766-b301-67e9e0549f8e" },
  { position: { lat: 33.5126218, lng:-112.0742097 }, name: 'Postino Central', id: "b322dc03-4526-44b9-ac10-4f8738cb3f6a" },
  { position: { lat: 33.4691862, lng:-112.04753 }, name: 'La Santisima', id: "d7b2f828-ac20-46aa-b9d8-72a02e27d3fa" },
  { position: { lat: 33.4659698, lng:-112.0489086 }, name: 'Ollie Vaughn\'s', id: "1561485b-7d99-408b-b562-06e322a089fe" },
  { position: { lat: 33.5095743, lng:-112.0589471 }, name: 'Los Dos Molinos', id: "fe8240ee-94b0-49c7-9d8f-fb80aba2e7e4" },
  { position: { lat: 33.5021156, lng:-111.9959172 }, name: 'La Grande Orange Grocery & Pizzeria', id: "0bc54d3c-d1a4-4e1d-a9d5-871e8de42c08" },
  { position: { lat: 33.5095516, lng:-112.0788312 }, name: 'Southern Rail Restaurant', id: "d6320eb4-36ea-451a-b54e-f6eac31994a3" },
  { position: { lat: 33.5194703, lng:-112.0654755 }, name: 'The Yard', id: "69d3cad1-708a-41a8-82f6-6aca0cb2a08b" },
  { position: { lat: 33.5116829, lng:-112.0654595 }, name: 'Hula\'s Modern Tiki', id: "b077aad0-6707-4d48-ab3c-3cb0396c3bcf" },
  { position: { lat: 33.4742999, lng:-112.0649821 }, name: 'Humble Pie', id: "e688bc06-da6a-45ea-8c52-0dd302c74b4f" },
  { position: { lat: 33.4745534, lng:-112.0647653 }, name: 'The Main Ingredient Ale House & Cafe', id: "bd8ff02a-2fa3-4a5d-a730-294c6f6cf468" },
  { position: { lat: 33.4801689, lng:-112.0918115 }, name: 'J P Mc Gurkee\'s Sandwich Shop', id: "343f018d-eede-42b7-aa36-292a4f72881a" },
  { position: { lat: 33.4790336, lng:-112.0480985 }, name: 'Barrio Cafe', id: "147dab5e-e876-4757-a38e-50817b23ca7f" }
]

export const MAP_OPTIONS = {
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

  export const MAP_KEY = 'AIzaSyAjwCGmLJQuWEtnfgsIw3ThLbolxrXLrX4'

  export const YELP_KEY = 'EhYmnMVtdRiyXX1HjAOptnV9-rpIvaQS_WHxz-jRbyk2Wzfe6kWSlAZZqJjkXiqxPRuc-xCDMCzhsdvbdkZybFdcINUvDvfsYph7UPGaZ3dOcBLD89Ykou8OPW26W3Yx'
