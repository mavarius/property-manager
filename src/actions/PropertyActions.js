import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const PropertyActions = {
  getAll () {
    API.getAllProperties()
  },

  deleteProperty (id) {
    API.deleteProperty(id)
  }
}

export default PropertyActions
