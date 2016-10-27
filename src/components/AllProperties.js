import React, { Component } from 'react'

import PropertyStore from '../stores/PropertyStore'
import PropertyActions from '../actions/PropertyActions'

// import Property from './Property'
import PropertyList from './PropertyList'

export default class AllProperties extends Component {
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
    console.log('this.state.properties: ', this.state.properties)
    return (
      <div className="container">
        <div className="row list">
          <PropertyList {...this.state} />
        </div>
      </div>
    )
  }
}
