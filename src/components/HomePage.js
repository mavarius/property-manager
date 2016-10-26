import React, { Component } from 'react'

import PropertyStore from '../stores/PropertyStore'
import PropertyActions from '../actions/PropertyActions'

// import Property from './Property'
// import PropertyList from './PropertyList'

export default class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      properties: PropertyStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    PropertyStore.on('CHANGE', this._onChange)
    PropertyActions.getAll()
  }

  componentWillUnmount () {
    PropertyStore.removeListener('CHANGE', this._onChange)
  }

  _onChange () {
    this.setState({
      properties: PropertyStore.getAll()
    })
  }

  _addNewProperty (e) {
    e.preventDefault()

    let newRoom = {
      propertyName: e.target.propertyName.value.toString(),
      description: e.target.description.value.toString()
    }

    PropertyActions.addProperty(newRoom)
    PropertyActions.getAll()
  }

  render () {
    return (
      <div className="row">
        <div className="row newRoom">
          <form onSubmit={(e) => this._addNewProperty(e)}>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <input id="propertyName" type="text" placeholder="property name" required />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-7">
              <input id="description" type="text" placeholder="description" required />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <button type="submit" className="darkBtn">add new property</button>
            </div>
          </form>
        </div>

        <div className="row propertyList">
          {/* <PropertyList {...this.state} /> */}
        </div>

        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}
