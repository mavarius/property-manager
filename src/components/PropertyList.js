import React from 'react'
import { browserHistory } from 'react-router'
import moment from 'moment'

import PropertyActions from '../actions/PropertyActions'

let deleteProperty = (id) => {
  PropertyActions.deleteProperty(id)
}

let editProperty = () => {

}

let ammenities = (ammenities) => {
  let amm = []

  if (ammenities.gym) amm.push('gym')
  if (ammenities.laundry) amm.push('laundry')
  if (ammenities.petsAllowed) amm.push('pets allowed')
  if (ammenities.pool) amm.push('pool')

  return amm.join(', ')
}

let renderProperties = (properties) => {
  let propertyList = properties.map((property, i) => {
    return (
      <div key={property._id} className="col-xs-12 col-sm-6 col-md-4">
        <div className="propertyCard">
          <span className="propertyImage"><img src={property.photoUrl} alt="property photo" /></span>
          <div className="cardSection">
            <h3>{property.name}</h3>
            <h4>{property.contact.email}</h4>
            <h5>{property.contact.phone || '-'}</h5>
            <p>{property.address.number} {property.address.street} unit {property.address.unit}</p>
            <p>{property.address.city}, {property.address.state} {property.address.zip}</p>
          </div>
          <div className="cardSection">
            <p>Year Built: {moment(property.yearBuilt).format('YYYY')}</p>
            <p>bedrooms: {property.bedrooms}</p>
            <p>bathrooms: {property.bathrooms}</p>
            <p>sqft: {property.sqft}</p>
            <p>${property.baseRent}</p>
          </div>
          <div className="cardSection">
            <p>Ammenities: {ammenities(property.ammenities)}</p>
          </div>
          <div className="cardSection">
            <p>Capacity: {property.tenants ? property.tenants.length : 0} / {property.bedrooms * 2}</p>
          </div>
          <button className="editBtn" onClick={() => editProperty()}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
          <button className="editBtn" onClick={() => deleteProperty(property._id)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      </div>
    )
  })

  return propertyList
}

const PropertyList = ({ properties }) => (
  <div>
    {properties ? renderProperties(properties) : <div>no properties...</div>}
  </div>
)

export default PropertyList
