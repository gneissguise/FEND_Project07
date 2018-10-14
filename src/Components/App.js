import React, { Component } from 'react'
import Map from './Map'
import Menu from './Menu'
import Header from './Header'
import YelpApi from './YelpApi'
import { MARKERS } from '../constants'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markers: MARKERS
    }

    this.testQuery = this.testQuery.bind(this)
  }

  testQuery = () => {
    // let timeout = 1000
    // this.state.markers.forEach((m) => {
    //   setTimeout(YelpApi(m.position), timeout)
    //   timeout += 1000
    // })
  }

  componentDidMount() {
    this.testQuery()
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
