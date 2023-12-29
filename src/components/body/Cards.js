import React from 'react'
import Card from './Card';
import './Cards.css'

const Cards = ({listOfRestaurant}) => {

  
  return (
    <div className='card-container'>
      
      {listOfRestaurant.map((restaurant, index) => (
        <Card key={index} 
        name={restaurant.info.name} 
        cloudinaryImageId={restaurant.info.cloudinaryImageId} 
        rating={restaurant.info.avgRating}
        time={restaurant.info.sla.deliveryTime}
        cuisines={restaurant.info.cuisines}
        locality={restaurant.info.locality}
        />
      ))}
      
    </div>
  )
}

export default Cards