import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _properties = []

let _property = {}

class PropertyStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ALL_PROPERTIES':
          _properties = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_PROPERTY':
          _property = action.payload
          this.emit('CHANGE')
          break
      }
    })
  }

  getAll () {
    return _properties
  }

  getProperty () {
    return _property
  }

}

export default new PropertyStore()
