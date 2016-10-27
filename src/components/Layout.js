import React, { Component } from 'react'
import NavBar from './NavBar'

export default class Layout extends Component {
  render () {
    let randomBackground = {
      backgroundImage: `url(../images/background${Math.floor(Math.random() * 3) + 1}.jpeg)`
    }

    return (
      <div>
        <div className="backgroundImage" style={randomBackground}></div>
        <div className="container-fluid">

          <div className="row splash">
            <div className="appBadge">
              <h1 className="appTitle">Schema</h1>
            </div>
          </div>

          <div className="content">
            <NavBar />

            <div className="row bodyContent">
              {this.props.children}
            </div>
          </div>

          <footer className="footer">&copy; copyright 2016 Schema Properties | The best scheme is a housing scheme!</footer>

        </div>
      </div>
    )
  }
}
