import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getFinances () {
    axios.get('/api/finances')
      .then(res => {
        let data = res.data
        ServerActions.receiveFinances(data)
      })
      .catch(console.error)
  },

  addClient (newClient) {
    axios.put('/api/clients', newClient)
      .then(res => {
        let data = res.data
        ServerActions.receiveAllClients(data)
      })
      .catch(console.error)
  },

  getAllClients () {
    axios.get('/api/clients')
      .then(res => {
        let data = res.data
        ServerActions.receiveAllClients(data)
      })
      .catch(console.error)
  },

  deleteClient (id) {
    axios.delete(`/api/clients/${id}`)
      .then(res => {
        let data = res.data
        ServerActions.receiveAllClients(data)
      })
      .catch(console.error)
  },

  getAllProperties () {
    axios.get('/api/properties')
      .then(res => {
        let data = res.data
        ServerActions.receiveAllProperties(data)
      })
      .catch(console.error)
  },

  deleteProperty (id) {
    axios.delete(`/api/properties/${id}`)
      .then(res => {
        let data = res.data
        ServerActions.receiveAllProperties(data)
      })
      .catch(console.error)
  }
}

export default API
