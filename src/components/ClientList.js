import React from 'react'
import { browserHistory } from 'react-router'

import ClientActions from '../actions/ClientActions'

let deleteClient = (id) => {
  ClientActions.deleteClient(id)
}

let editClient = () => {

}

let renderClients = (clients) => {
  let clientList = clients.map((client, i) => {
    return (
      <div key={client._id} className="col-xs-12 col-sm-6 col-md-4">
        <div className="clientCard">
          <h3>{client.name.firstName} {client.name.lastName}</h3>
          <h4>{client.email}</h4>
          <h4>{client.phone}</h4>
          <p>{client.address.number} {client.address.street} unit {client.address.unit}</p>
          <p>{client.address.city}, {client.address.state} {client.address.zip}</p>
          <button className="editBtn" onClick={() => editClient()}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
          <button className="editBtn" onClick={() => deleteClient(client._id)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      </div>
    )
  })

  return clientList
}

const ClientList = ({ clients }) => (
  <div>
    {clients ? renderClients(clients) : <div>no clients...</div>}
  </div>
)

export default ClientList
