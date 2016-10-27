import React, { Component } from 'react'

import Modal from './Modal'

import PropertyStore from '../stores/PropertyStore'
import PropertyActions from '../actions/PropertyActions'
import InterfaceActions from '../actions/InterfaceActions'

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
  }

  _openModal (content) {
    InterfaceActions.modalSwitch(true, content)
  }

  render () {
    return (
      <div className="container">
        <div className="row list">
        <button onClick={() => this._openModal('client')} className="addBtn col-xs-12 col-sm-6 col-md-3 col-md-offset-3"><i className="fa fa-user" aria-hidden="true"></i> add new client</button>
        <button onClick={() => this._openModal('property')} className="addBtn col-xs-12 col-sm-6 col-md-3"><i className="fa fa-home" aria-hidden="true"></i> add new property</button>
        </div>
        <Modal />
      </div>
    )
  }
}
