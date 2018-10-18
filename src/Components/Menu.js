import React, { Component } from 'react'
import { reveal as HamburgerMenu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import $ from 'jquery'
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
    <Link
      to={`/${marker.id}`}
      onClick={props.onClick}
      id={props.id}
      key={marker.id}
    >
      {marker.name}
    </Link>
  )
}

// Helper function to check if a passed object is null or empty
const isNullOrEmpty = x => // eslint-disable-next-line
  typeof x === "string" && // eslint-disable-next-line
    (x.trim().length === 0 || x === "" || x == null) || // eslint-disable-next-line
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

  // Toggles infobox display
  handleClick(event) {
    event.preventDefault()
    this.props.toggleOpen(event.target.id)
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

  componentDidMount() {
    $('.bm-burger-button button').attr('tabindex', '0')
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
                                id={m.id}
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
