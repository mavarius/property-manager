import React, { Component } from 'react'

import PropertyStore from '../stores/PropertyStore'
import PropertyActions from '../actions/PropertyActions'

export default class Finance extends Component {
  constructor () {
    super()

    this.state = {
      finances: PropertyStore.getFinances()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    PropertyStore.on('CHANGE', this._onChange)
    PropertyActions.getFinances()
  }

  componentWillUnmount () {
    PropertyStore.removeListener('CHANGE', this._onChange)
  }

  _onChange () {
    this.setState({
      finances: PropertyStore.getFinances()
    })
  }

  render () {
    const { finances } = this.state
    return (
      <div className="container">
        <div className="row list">
          <div className="financeCard">
            <h1>Total Properties: {finances.totalRooms}</h1>
            <h1>Total Tenants: {finances.totalRented}</h1>
            <h1>Montly Income: ${finances.monthlyIncome}</h1>
          </div>
        </div>
      </div>
    )
  }
}
