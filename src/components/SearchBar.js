import React from 'react'
// import { browserHistory } from 'react-router'

let _handleSearch = (e) => {
  e.preventDefault()
  console.log('SearchBar')
}

const SearchBar = () => (
  <div className="searchBar">
    <form onSubmit={(e) => _handleSearch(e)}>
      <span className="appSubtitle">The best scheme is a housing scheme</span>
      <div className="searchBlock">
        <input id="propertyName" type="text" placeholder="search" required />
        <button className="searchBtn"><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
    </form>
  </div>
)

export default SearchBar
