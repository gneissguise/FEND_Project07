import React, { Component } from 'react'
import { reveal as HamburgerMenu } from 'react-burger-menu'
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.showSettings = this.showSettings.bind(this)
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="outer-container">
        <HamburgerMenu
          isOpen={this.state.isOpen}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          width={"15vw"}
        >
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="#">Settings</a>
        </HamburgerMenu>
        <main id="page-wrap">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Menu
