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
