import React, { Component } from 'react'
import Map from './Map'
import Menu from './Menu'
import Header from './Header'
import { MARKERS } from '../constants'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: MARKERS
    }

    this.handleMarkerUpdate = this.handleMarkerUpdate.bind(this)
    this.handleToggleOpen = this.handleToggleOpen.bind(this)
  }

  gm_authFailure() {
    window.alert('Error connecting to Google Maps api..')
  }

  handleMarkerUpdate(markers) {
    this.setState({ markers })
  }

  handleToggleOpen(id) {
    const markers = this.state.markers

    markers.map(m => {
      if (m.id === id) {
        m.isOpen = !m.isOpen
      }
      return m
    })

    this.setState({ markers })
  }

  componentDidMount() {
    window.gm_authFailure = this.gm_authFailure;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu
          markers={this.state.markers}
          handleMarkerUpdate={this.handleMarkerUpdate}
          toggleOpen={this.handleToggleOpen}
        >
          <Map
            markers={this.state.markers}
            handleMarkerUpdate={this.handleMarkerUpdate}
            toggleOpen={this.handleToggleOpen} />
        </Menu>
      </div>
    )
  }
}

export default App
