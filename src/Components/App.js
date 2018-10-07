import React, { Component } from 'react'
import './App.css'
import Map from './Map'
import Menu from './Menu'
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props)
    //TODO: fill state with default map markers
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu>
          <Map />
        </Menu>
      </div>
    );
  }
}

export default App
