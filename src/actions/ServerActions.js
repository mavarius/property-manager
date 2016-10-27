import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveAllClients (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_CLIENTS',
      payload: data
    })
  },

  receiveAllProperties (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_PROPERTIES',
      payload: data
    })
  }
}

export default ServerActions
