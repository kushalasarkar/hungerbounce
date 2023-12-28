import React from 'react'
import './Search.css';

const Search = () => {
  return (
    <div className='search-container'>
      <input placeholder='Type for search'/>
      <button>Search</button>
    </div>
  )
}

export default Search