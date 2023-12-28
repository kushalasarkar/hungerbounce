import React from 'react'
import './Card.css'
import logo from "./Hyderabadi-chicken-Biryani.jpg";
const Card = ({name, cuisine, rating, time}) => {
  return (
    <div className='card'>
      <img className='food-img' alt="image" src={logo} />
      <h4 className='restaurant-name'>{name}</h4>
      <h5 className='cuisine'>North Indian, Asian</h5>
      <div className='last-line'> 
        <div className='rating'>
          4.2 *
        </div>
        <h5 className='time'>30 mins</h5>
      </div>
    </div>
  )
}

export default Card
