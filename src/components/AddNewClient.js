import React, { Component } from 'react'

import ClientActions from '../actions/ClientActions'
import InterfaceActions from '../actions/InterfaceActions'

export default class AddNewClient extends Component {
  submitNew (e) {
    e.preventDefault()

    let newFormData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: {
        number: e.target.number.value,
        street: e.target.street.value,
        unit: e.target.unit.value,
        city: e.target.city.value,
        zip: e.target.zip.value
      },
      pets: e.target.pets.value,
      note: e.target.note.value
    }

    ClientActions.addClient(newFormData)
    InterfaceActions.modalSwitch(false)
  }

  cancelForm () {
    // for (let inputField in e.target) {
    //   e.target[inputField].value = ''
    // }

    InterfaceActions.modalSwitch(false)
  }

  render () {
    return (
      <div className="addNew row">
        <form onSubmit={(e) => this.submitNew(e)}>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-xs-2 col-form-label">First Name:</label>
            <div className="col-xs-4">
              <input className="form-control" type="text" id="firstName" />
            </div>
            <label htmlFor="lastName" className="col-xs-2 col-form-label">Last Name:</label>
            <div className="col-xs-4">
              <input className="form-control" type="text" id="lastName" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="email" className="col-xs-2 col-form-label">Email:</label>
            <div className="col-xs-6">
              <input className="form-control" type="email" id="email" />
            </div>
            <label htmlFor="phone" className="col-xs-1 col-form-label">Phone:</label>
            <div className="col-xs-3">
              <input className="form-control" type="tel" id="phone" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="number" className="col-xs-2 col-form-label">Number:</label>
            <div className="col-xs-1">
              <input className="form-control" type="text" id="number" />
            </div>
            <label htmlFor="street" className="col-xs-1 col-form-label">Street:</label>
            <div className="col-xs-6">
              <input className="form-control" type="text" id="street" />
            </div>
            <label htmlFor="unit" className="col-xs-1 col-form-label">Unit:</label>
            <div className="col-xs-1">
              <input className="form-control" type="text" id="unit" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="city" className="col-xs-2 col-form-label">City:</label>
            <div className="col-xs-4">
              <input className="form-control" ref="city" type="text" id="city" />
            </div>
            <label htmlFor="state" className="col-xs-1 col-form-label">State:</label>
            <div className="col-xs-1">
              <input className="form-control" ref="state" type="text" id="state" />
            </div>
            <label htmlFor="zip" className="col-xs-1 col-form-label">Zip:</label>
            <div className="col-xs-3">
              <input className="form-control" ref="text" type="text" id="zip" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="pets" className="col-xs-2 col-form-label">Pets:</label>
            <div className="col-xs-2">
              <input className="form-control" type="number" id="pets" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="note" className="col-xs-2 col-form-label">Note:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="note" type="text" id="note" />
            </div>
          </div>

          <button className="saveBtn col-xs-6 col-md-2" type="submit">save</button>
        </form>
        <button className="cancelBtn col-xs-6 col-md-2 col-md-offset-1" onClick={() => this.cancelForm()}>cancel</button>
      </div>
    )
  }
}
