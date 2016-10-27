import React, { Component } from 'react'

import PropertyActions from '../actions/PropertyActions'
import InterfaceActions from '../actions/InterfaceActions'

export default class AddNewProperty extends Component {
  submitNew (e) {
    e.preventDefault()

    let newFormData = {
      name: e.target.name.value,
      contact: {
        email: e.target.email.value,
        phone: e.target.phone.value
      },
      address: {
        number: e.target.number.value,
        street: e.target.street.value,
        unit: e.target.unit.value,
        city: e.target.city.value,
        zip: e.target.zip.value
      },
      bedrooms: e.target.bedrooms.value,
      bathrooms: e.target.bathrooms.value,
      yearBuilt: e.target.yearBuilt.value,
      sqft: e.target.sqft.value,
      baseRent: e.target.baseRent.value,
      photoUrl: e.target.photoUrl.value
    }

    PropertyActions.addProperty(newFormData)
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
            <label htmlFor="name" className="col-xs-2 col-form-label">Property Name:</label>
            <div className="col-xs-10">
              <input className="form-control" type="text" id="name" />
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
              <input className="form-control" type="text" id="city" />
            </div>
            <label htmlFor="state" className="col-xs-1 col-form-label">State:</label>
            <div className="col-xs-1">
              <input className="form-control" type="text" id="state" />
            </div>
            <label htmlFor="zip" className="col-xs-1 col-form-label">Zip:</label>
            <div className="col-xs-3">
              <input className="form-control" type="text" id="zip" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="bedrooms" className="col-xs-2 col-form-label">Bedrooms:</label>
            <div className="col-xs-1">
              <input className="form-control" type="number" id="bedrooms" />
            </div>
            <label htmlFor="bathrooms" className="col-xs-1 col-form-label">Bathrooms:</label>
            <div className="col-xs-1">
              <input className="form-control" type="number" id="bathrooms" />
            </div>
            <label htmlFor="sqft" className="col-xs-1 col-form-label">sqft:</label>
            <div className="col-xs-1">
              <input className="form-control" type="number" id="sqft" />
            </div>
            <label htmlFor="yearBuilt" className="col-xs-1 col-form-label">Year Built:</label>
            <div className="col-xs-2">
              <input className="form-control" type="date" id="yearBuilt" />
            </div>
            <label htmlFor="baseRent" className="col-xs-1 col-form-label">Base Rent:</label>
            <div className="col-xs-1">
              <input className="form-control" type="number" id="baseRent" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="photoUrl" className="col-xs-2 col-form-label">Photo:</label>
            <div className="col-xs-10">
              <input className="form-control" type="url" id="photoUrl" />
            </div>
          </div>

          <button className="saveBtn col-xs-6 col-md-2" type="submit">save</button>
        </form>
        <button className="cancelBtn col-xs-6 col-md-2 col-md-offset-1" onClick={() => this.cancelForm()}>cancel</button>
      </div>
    )
  }
}
