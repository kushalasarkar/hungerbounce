import React, { useState } from 'react'
import './Search.css';

const Search = () => {

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(`searchText-${searchText} and filteredrest-${filteredRestaurant}`);
  return (
    <div className='search-container'>
      <input placeholder='Type for search' onChange={(e)=>{setSearchText(e.target.value)}} value={searchText}/>
      <button onClick={setFilteredRestaurant(searchText)}>Search</button>
    </div>
  )
}

export default Search