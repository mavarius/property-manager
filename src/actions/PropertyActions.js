import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const PropertyActions = {
  getAll () {
    API.getAllProperties()
  },

  deleteProperty (id) {
    API.deleteProperty(id)
  },

  getFinances () {
    API.getFinances()
  }
}

export default PropertyActions
