export const MARKERS = [
  { position: { lat: 33.5038147, lng: -112.1000349 }, name: "Da Vang Restaurant", id: "da-vang-restaurant-phoenix" },
  { position: { lat: 33.4974403381348, lng: -112.083885192871 }, name: "Copper Star Coffee", id: "copper-star-coffee-phoenix" },
  { position: { lat: 33.4961035, lng: -112.1000449 }, name: "My Mother's Restaurant", id: "my-mothers-restaurant-phoenix" },
  { position: { lat: 33.4667716101957, lng: -112.072746232152 }, name: "The Coronado PHX", id: "the-coronado-phx-phoenix" },
  { position: { lat: 33.470139, lng: -112.065475 }, name: "Green New American Vegetarian", id: "green-new-american-vegetarian-phoenix" },
  { position: { lat: 33.469967, lng: -112.06543 }, name: "Nami", id: "nami-phoenix" },
  { position: { lat: 33.48721494181, lng: -112.064760461263 }, name: "Gadzooks Enchiladas and Soup", id: "gadzooks-enchiladas-and-soup-phoenix" },
  { position: { lat: 33.5005972575259, lng: -112.074237169975 }, name: "Lux Central", id: "lux-central-phoenix-2" },
  { position: { lat: 33.45008, lng: -112.07344 }, name: "Nook Kitchen Downtown", id: "nook-kitchen-phoenix-2" },
  { position: { lat: 33.5105022014477, lng: -112.072248748624 }, name: "Lou Maltnatis Pizzeria", id: "lou-malnatis-pizzeria-phoenix-3" },
  { position: { lat: 33.5105643381748, lng: -112.07333837003 }, name: "Shake Shack", id: "shake-shack-phoenix" },
  { position: { lat: 33.449228, lng: -112.072853 }, name: "Hanny's", id: "hannys-phoenix-2" },
  { position: { lat: 33.4469954665414, lng: -112.073873095866 }, name: "Bitter & Twisted Cocktail Parlour", id: "bitter-and-twisted-cocktail-parlour-phoenix" },
  { position: { lat: 33.4473917315183, lng: -112.072831046558 }, name: "The Arrogant Butcher", id: "the-arrogant-butcher-phoenix" },
  { position: { lat: 33.4478612, lng: -112.0712546 }, name: "The Whining Pig", id: "the-whining-pig-downtown-phoenix-3" },
  { position: { lat: 33.53043, lng: -112.0471 }, name: "Rokerij", id: "rokerij-phoenix" },
  { position: { lat: 33.4655, lng: -112.0824 }, name: "Ahipoki Bowl", id: "ahipoki-phoenix-phoenix" },
  { position: { lat: 33.46542, lng: -112.082074 }, name: "Vovomeena", id: "vovomeena-phoenix" },
  { position: { lat: 33.51268, lng: -112.07414 }, name: "Postino Central", id: "postino-central-phoenix" },
  { position: { lat: 33.4692, lng: -112.04739 }, name: "La Santisima", id: "la-santisima-phoenix" },
  { position: { lat: 33.4659576, lng: -112.0487597 }, name: "Ollie Vaughn's", id: "ollie-vaughns-phoenix" },
  { position: { lat: 33.5096778869629, lng: -112.058807373047 }, name: "Los Dos Molinos", id: "los-dos-molinos-phoenix-4" },
  { position: { lat: 33.502312625663, lng: -111.99575216742 }, name: "La Grande Orange Grocery & Pizzeria", id: "la-grande-orange-pizzeria-phoenix-2" },
  { position: { lat: 33.509547, lng: -112.078698 }, name: "Southern Rail Restaurant", id: "southern-rail-phoenix-3" },
  { position: { lat: 33.51923, lng: -112.06535 }, name: "The Yard", id: "the-yard-phoenix-3" },
  { position: { lat: 33.5116, lng: -112.06534 }, name: "Hula's Modern Tiki", id: "hulas-modern-tiki-phoenix" },
  { position: { lat: 33.474345, lng: -112.064842 }, name: "Humble Pie", id: "humble-pie-phoenix-3" },
  { position: { lat: 33.4745826893249, lng: -112.064643147238 }, name: "The Main Ingredient Ale House & Cafe", id: "the-main-ingredient-ale-house-and-café-phoenix-2" },
  { position: { lat: 33.4800401, lng: -112.0914949 }, name: "J P Mc Gurkee's Sandwich Shop", id: "mcgurkees-italian-kitchen-phoenix" },
  { position: { lat: 33.47903, lng: -112.04789 }, name: "Barrio Cafe", id: "barrio-café-phoenix-2" }
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
