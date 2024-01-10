import React from 'react'
import Card from './Card';
import './Cards.css'
import {NavLink} from 'react-router-dom'

const Cards = ({listOfRestaurant}) => {

  
  return (
    <div className='card-container'>
      {/* <NavLink to="/restautants/:resid">Menu</NavLink> */}
      {listOfRestaurant.map((restaurant) => (
        <NavLink to={"/restautants/"+restaurant.info.id} 
        key={restaurant.info.id}>
        <Card  
        name={restaurant.info.name} 
        cloudinaryImageId={restaurant.info.cloudinaryImageId} 
        rating={restaurant.info.avgRating}
        time={restaurant.info.sla.deliveryTime}
        cuisines={restaurant.info.cuisines}
        locality={restaurant.info.locality}
        // onClick={()=>{}}
        /></NavLink>
      ))}
      
    </div>
  )
}

export default Cards