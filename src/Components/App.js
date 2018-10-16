import React, { Component } from 'react'
import Map from './Map'
import Menu from './Menu'
import Header from './Header'
import { MARKERS } from '../constants'
import './App.css'

//TODO: Add routing
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: MARKERS
    }

    this.handleMarkerUpdate = this.handleMarkerUpdate.bind(this)
  }

  handleMarkerUpdate(markers) {
    this.setState({ markers })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu
          markers={this.state.markers}
          handleMarkerUpdate={this.handleMarkerUpdate}
        >
          <Map
            markers={this.state.markers}
            handleMarkerUpdate={this.handleMarkerUpdate}
          />
        </Menu>
      </div>
    );
  }
}

export default App
