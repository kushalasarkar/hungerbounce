import React from 'react'
import Card from './Card';
import './Cards.css'

const Cards = ({listOfRestaurant}) => {
  return (
    <div className='card-container'>
      {/* <Card name={"KFC"}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      {listOfRestaurant.map((restaurant,index)=>{
        <Card key={index} name={restaurant.info.name}/>
})}
    </div>
  )
}

export default Cards