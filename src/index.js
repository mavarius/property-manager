import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import HomePage from './components/HomePage'
import AllClients from './components/AllClients'
import AllProperties from './components/AllProperties'
import Finance from './components/Finance'

render(
  <Router history={browserHistory}>

    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="/clients" component={AllClients} />
      <Route path="/properties" component={AllProperties} />
      <Route path="/finance" component={Finance} />
    </Route>

  </Router>,
  document.getElementById('root')
)
