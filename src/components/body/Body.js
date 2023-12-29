import React, { useEffect, useState } from 'react'
import Search from './Search'
import Cards from './Cards'
import Card from './Card'
import Shimmer from './Shimmer';
import './Body.css';

const Body = () => {
  
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata = async () => {
    // const data = await fetch(`https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999`);
    const data = await fetch(`https://instafood.onrender.com/api/restaurants?lat=18.516726&lng=73.856255`);
    const json = await data.json();

    //optional chaining
    setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards?.card[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if (listOfRestaurant.length == 0) {
    return <Shimmer />
  }

  return (
    <div className='body'>
      <Search />
      <Cards listOfRestaurant = {listOfRestaurant}/>
      
    </div>
  )
}

export default Body