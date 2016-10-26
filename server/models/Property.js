const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
  name: { type: String },
  address: {
    number: { type: Number },
    street: { type: String },
    unit: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: Number }
  },
  contact: {
    email: { type: String },
    phone: { type: Number }
  },
  bedrooms: { type: Number },
  bathroms: { type: Number },
  yearBuilt: { type: Date },
  sqft: { type: Number },
  ammenities: {
    petsAllowed: Boolean,
    laundry: Boolean,
    pool: Boolean,
    gym: Boolean
  },
  baseRent: { type: Number },
  photoUrl: { type: String },
  tenants: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }], validate: [arrayLimit, '{PATH} exceeds the limit of 10'] }
})

function arrayLimit (tenants) {
  return tenants.length <= this.bedrooms * 2
}

const Property = mongoose.model('Property', propertySchema)

module.exports = Property

// GENERATOR

// [
//   '{{repeat(5, 7)}}',
//   {
//     name: '{{company()}}',
//     address: {
//       number: '{{integer(100, 999)}}',
//       street: '{{street()}}',
//       unit: '{{integer(1, 600)}}',
//       city: '{{city()}}',
//       state: '{{state()}}',
//       zip: '{{integer(10000, 99999)}}'
//              },
//     contact: {
//       email: '{{email()}}',
//       phone: '+1 {{phone()}}'
//     },
//     bedrooms: '{{integer(0, 5)}}',
//     bathrooms: '{{integer(0, 4)}}',
//     yearBuilt: '{{date(new Date(1970, 0, 1), new Date(), "YYYY")}}',
//     sqft: function () {
//       var sqft = (this.bedrooms * 300) + (this.bathrooms * 150) + 300;
//       return sqft;
//     },
//     ammenities: {
//       petsAllowed: '{{bool()}}',
//       laundry: '{{bool()}}',
//       pool: '{{bool()}}',
//       gym: '{{bool()}}'
//     },
//     baseRent: '{{integer(2000)}}',
//     photoUrl: 'http://placehold.it/500x300'
//   }
// ]
