import React from 'react'

const Search = ({ basicSearchFunction }) => (

  <form onSubmit={(e) => e.preventDefault()}>
    <div className="SearchBar">
      <input className="input" placeholder="Search" onChange={basicSearchFunction}/>
    </div>
  </form>

)

export default Search