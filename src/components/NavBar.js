import React from 'react'
import { Link } from 'react-router'
import SearchBar from './SearchBar'

const NavBar = () => (
  <div className="navBar">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-2 link">
          <Link className="Link" to="/" onlyActiveOnIndex>Home</Link>
        </div>

        <div className="col-xs-12 col-md-2 link">
          <Link className="Link" to="/finance">Finance</Link>
        </div>

        <div className="col-xs-12 col-md-4 searchArea">
          <SearchBar />
        </div>

        <div className="col-xs-12 col-md-2 link">
          <Link className="Link" to="/clients">Clients</Link>
        </div>

        <div className="col-xs-12 col-md-2 link">
          <Link className="Link" to="/properties">Properties</Link>
        </div>
      </div>
    </div>
  </div>
)

export default NavBar
