import React, { Component } from 'react'

import ClientStore from '../stores/ClientStore'
import ClientActions from '../actions/ClientActions'

// import Client from './Client'
import ClientList from './ClientList'

export default class AllClients extends Component {
  constructor () {
    super()

    this.state = {
      clients: ClientStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    ClientStore.on('CHANGE', this._onChange)
    ClientActions.getAll()
  }

  componentWillUnmount () {
    ClientStore.removeListener('CHANGE', this._onChange)
  }

  _onChange () {
    this.setState({
      clients: ClientStore.getAll()
    })
  }

  _addNewClient (e) {
    e.preventDefault()

    let newRoom = {
      propertyName: e.target.propertyName.value.toString(),
      description: e.target.description.value.toString()
    }

    ClientActions.addClient(newRoom)
    ClientActions.getAll()
  }

  render () {
    console.log('this.state.clients: ', this.state.clients)
    return (
      <div className="container">
        <div className="row list">
          <ClientList {...this.state} />
        </div>
      </div>
    )
  }
}
