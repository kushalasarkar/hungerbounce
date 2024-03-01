import React, { useEffect, useState } from 'react'
import Cards from './Cards'

import Shimmer from './Shimmer';
// import './Body.css';

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata = async () => {
    // const data = await fetch(`https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999`);
    // const data = await fetch(`https://instafood.onrender.com/api/restaurants?lat=18.516726&lng=73.856255`);
    // const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1157917&lng=91.7085933&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
    const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.516726&lng=73.856255&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
    const json = await data.json();

    //optional chaining
    setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  console.log(listOfRestaurant);
  if (listOfRestaurant.length === 0) {
    return <Shimmer />
  }
  // console.log(`searchText-${searchText} and filteredrest-${filteredRestaurant}`);

  return (
    <div className='body'>
      {/* <Search listOfRestaurant/> */}
      <div className=' mx-28'>
        <div className='filters-top-line flex justify-evenly pt-2 '>
          <div className='search-container filters-top-line-item w-1/3'>

            <input placeholder='Type for search' value={searchText} onChange={(e) => { setSearchText(e.target.value) }}
              className='border-2  pl-2 w-4/5 h-10 rounded-l-lg' />
            <button className='h-10  bg-orange-400 px-2 w-20 text-white border-none rounded-r-lg'
             onClick={() => {
              console.log("searchText = " + searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant)
            }}>Search</button>

          </div>
          <button className='filters-top-line-item bg-orange-400 px-3 rounded-lg text-white' 
          onClick={() => {
            const avgres = listOfRestaurant.filter((res) => res.info.avgRating >= 4.2)
            setFilteredRestaurant(avgres)
          }}>Top Rated Restaurants</button>
          <button className='filters-top-line-item bg-orange-400 px-3 rounded-lg text-white' 
          onClick={() => { setFilteredRestaurant(listOfRestaurant) }}>Reset</button>
        </div>
      </div>
      <Cards listOfRestaurant={filteredRestaurant} />

    </div>
  )
}

export default Body