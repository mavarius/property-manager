import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAll () {
    axios.get('/api/properties')
      .then(res => {
        let data = res.data
        ServerActions.receiveAll(data)
      })
      .catch(console.error)
  }
}

export default API
