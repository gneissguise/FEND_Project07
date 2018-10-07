import React, { Component } from 'react'
import './App.css'
import Map from './Map'
import Menu from './Menu'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: [
        { position: { lat: 33.503768, lng: -112.1004451 }, id: "c5ee758f-a1d2-4eef-93e4-f49c909f4fc3" },
        { position: { lat: 33.4974639, lng: -112.0860881 }, id: "f9494b83-1927-4ce6-b86f-a3187002a1a3" },
        { position: { lat: 33.496074, lng: -112.100311 }, id: "9eb68efa-8a38-4889-9804-200f77da753f" },
        { position: { lat: 33.4713256, lng: -112.0670057 }, id: "5f0f47d2-57c3-4291-85df-bc683b534a58" },
        { position: { lat: 33.4699685, lng: -112.0675557 }, id: "8cddb283-5d2f-46c0-9fd3-a38565fd75f2" },
        { position: { lat: 33.4677608, lng: -112.0782738 }, id: "e14219d1-a752-47a9-b575-1018e139100c" },
        { position: { lat: 33.4870905, lng: -112.0668027 }, id: "cd91ada5-aa6c-4e14-abed-b9de3593035a" },
        { position: { lat: 33.5004885, lng: -112.0762647 }, id: "983ff322-6af7-465a-bea7-2466f96311ab" },
        { position: { lat: 33.4500855, lng: -112.0756048 }, id: "dcbbba48-b841-4558-a083-9a11fe729bd3" },
        { position: { lat: 33.510658, lng: -112.0742872 }, id: "b7740e06-1625-46dd-81a6-bee29e09d937" },
        { position: { lat: 33.510694, lng: -112.0754816 }, id: "25cf2949-c901-4910-8231-4dfeb84adc33" },
        { position: { lat: 33.4491382, lng: -112.0752131 }, id: "8ea90d43-1233-48e6-9f85-bef3734b748e" },
        { position: { lat: 33.4470575, lng: -112.0760897 }, id: "fa2f6459-fff8-4a0e-a319-0df6972e3bfa" },
        { position: { lat: 33.4475043, lng: -112.0758442 }, id: "71d3995d-a341-47fc-b156-790a9ed9308d" },
        { position: { lat: 33.4474539, lng: -112.0750694 }, id: "b0a87ce3-c4c5-4855-879c-97706dae75df" },
        { position: { lat: 33.5303981, lng: -112.0492626 }, id: "ac5692c7-360b-4294-8eb8-23593d685824" },
        { position: { lat: 33.523909, lng: -112.0489861 }, id: "7c6e3aa5-7adc-4178-8bd7-839278332e5b" },
        { position: { lat: 33.4654739, lng: -112.0843656 }, id: "3b8d06d0-a700-4766-b301-67e9e0549f8e" },
        { position: { lat: 33.5095445, lng: -112.0723147 }, id: "b322dc03-4526-44b9-ac10-4f8738cb3f6a" },
        { position: { lat: 33.4659805, lng: -112.0509477 }, id: "d7b2f828-ac20-46aa-b9d8-72a02e27d3fa" },
        { position: { lat: 33.4691907, lng: -112.0495926 }, id: "1561485b-7d99-408b-b562-06e322a089fe" },
        { position: { lat: 33.5095816, lng: -112.060997 }, id: "fe8240ee-94b0-49c7-9d8f-fb80aba2e7e4" },
        { position: { lat: 33.50211, lng: -111.9979664 }, id: "0bc54d3c-d1a4-4e1d-a9d5-871e8de42c08" },
        { position: { lat: 33.5126635, lng: -112.0762657 }, id: "d6320eb4-36ea-451a-b54e-f6eac31994a3" },
        { position: { lat: 33.5194631, lng: -112.067522 }, id: "69d3cad1-708a-41a8-82f6-6aca0cb2a08b" },
        { position: { lat: 33.5116785, lng: -112.0675067 }, id: "b077aad0-6707-4d48-ab3c-3cb0396c3bcf" },
        { position: { lat: 33.4745505, lng: -112.0668187 }, id: "e688bc06-da6a-45ea-8c52-0dd302c74b4f" },
        { position: { lat: 33.4742917, lng: -112.0670358 }, id: "bd8ff02a-2fa3-4a5d-a730-294c6f6cf468" },
        { position: { lat: 33.4801533, lng: -112.0938553 }, id: "343f018d-eede-42b7-aa36-292a4f72881a" },
        { position: { lat: 33.4790185, lng: -112.0501517 }, id: "147dab5e-e876-4757-a38e-50817b23ca7f" }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu>
          <Map markers={this.state.markers} />
        </Menu>
      </div>
    );
  }
}

export default App
