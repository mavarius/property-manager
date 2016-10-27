import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const ClientActions = {
  getAll () {
    API.getAllClients()
  },

  deleteClient (id) {
    API.deleteClient(id)
  }
}

export default ClientActions
