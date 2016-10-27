import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAllClients () {
    axios.get('/api/clients')
      .then(res => {
        let data = res.data
        ServerActions.receiveAllClients(data)
      })
      .catch(console.error)
  },

  deleteClient () {
    axios.get('/api/clients')
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

  deleteProperty () {
    axios.get('/api/properties')
      .then(res => {
        let data = res.data
        ServerActions.receiveAllProperties(data)
      })
      .catch(console.error)
  }
}

export default API
