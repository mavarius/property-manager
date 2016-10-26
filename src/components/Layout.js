import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    // let randomBackground = {
    //   backgroundImage: `url(../images/background.jpeg)`
    // }

    return (
      <div>
        <div className="backgroundImage"></div>
        <div className="container">
          <div className="row">
            <h1 className="appTitle">Moneygrubbers</h1>
          </div>
          <div className="row">
            <h3 className="appSubtitle col-xs-12 col-sm-6 col-md-10">The best scheme is a housing scheme!</h3>
          </div>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
