import React, { useEffect, useState } from 'react'
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
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  // console.log(listOfRestaurant.length);
  if (listOfRestaurant.length === 0) {
    return <Shimmer />
  }
  // console.log(`searchText-${searchText} and filteredrest-${filteredRestaurant}`);

  return (
    <div className='body'>
      {/* <Search listOfRestaurant/> */}
      <div className='filters-top-line'>
        <div className='search-container filters-top-line-item'>
          <input placeholder='Type for search' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button onClick={() => {
            console.log("searchText = " + searchText);

            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredRestaurant);
            setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>

        </div>
        <button className='filters-top-line-item' onClick={()=>{
          const avgres = listOfRestaurant.filter((res)=> res.info.avgRating>=4.2)
          setFilteredRestaurant(avgres)
        }}>Top Rated Restaurants</button>
        <button className='filters-top-line-item' onClick={()=>{setFilteredRestaurant(listOfRestaurant)}}>Reset</button>
      </div>
      <Cards listOfRestaurant={filteredRestaurant} />

    </div>
  )
}

export default Body