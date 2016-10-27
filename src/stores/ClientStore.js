import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _clients = []

let _client = {}

class ClientStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ALL_CLIENTS':
          _clients = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_CLIENT':
          _client = action.payload
          this.emit('CHANGE')
          break
      }
    })
  }

  getAll () {
    return _clients
  }

  getClient () {
    return _client
  }

}

export default new ClientStore()
