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
  },

  receiveFinances (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_FINANCES',
      payload: data
    })
  }
}

export default ServerActions
