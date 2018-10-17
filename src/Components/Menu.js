import React, { Component } from 'react'
import { reveal as HamburgerMenu } from 'react-burger-menu'
import './Menu.css'

// Stateless component for the text filtering of markers
const FilterBox = (props) => {
  return (
    <div className="filterBox">
      <input
        className="glow"
        type="text"
        placeholder="Type to filter list.."
        value={props.value}
        onChange={props.onChange} />
    </div>
  )
}

// Stateless component for the individual markers to be listed on menu
const MarkerNavItem = (props) => {
  const marker = props.marker
  return (
    <a href={`/${marker.id}`} onClick={props.onClick} id={marker.id} key={marker.id}>
      {marker.name}
    </a>
  )
}

// Helper function to check if a passed object is null or empty
// eslint-disable-next-line
const isNullOrEmpty = x =>
  typeof x === "string" &&
    (x.trim().length === 0 || x === "" || x == null) ||
    /number|array|object|undefined/.test(typeof x) && x == null
    ? true
    : false

// Helper function to convert regex escaped strings into a simple pattern
const patternConvert = str =>
  isNullOrEmpty(str)
    ? new RegExp('.', 'gi')
    : new RegExp(`${str.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s/g, '.*')}`, 'gi')

// Side menu component
class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayedMarkers: props.markers,
      textFilter: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleTextFilter = this.handleTextFilter.bind(this)
  }

  //TODO: Make links clickable so that the info box is toggled on marker
  handleClick(event) {
    event.preventDefault()
  }

  // Filters out items on the list based on text in the <FilterBox> component
  handleTextFilter(event) {
    const pattern = patternConvert(event.target.value)
    const filteredMarkers = this.props.markers.map(m => {
      m.visible = pattern.test(m.name.toLowerCase())
        ? m.visible = true
        : m.visible = false
      return m
    })

    this.setState({
      textFilter: event.target.value,
      displayedMarkers: filteredMarkers
    })

    this.props.handleMarkerUpdate(filteredMarkers)
  }

  render() {
    const markers = this.state.displayedMarkers

    return (
      <div id="outer-container">
        <HamburgerMenu
          disableCloseOnEsc
          disableOverlayClick
          noOverlay
        >
          <FilterBox
            value={this.state.textFilter}
            onChange={this.handleTextFilter}
          />
          <div className="scrollable">
            {markers.map(m => m.visible ? <MarkerNavItem
                                key={m.id}
                                marker={m}
                                onClick={this.handleClick}
                              /> : null)}
          </div>
        </HamburgerMenu>
        <main id="page-wrap">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Menu
