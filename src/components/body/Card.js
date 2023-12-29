import React from 'react'
import './Card.css'
import logo from "./Hyderabadi-chicken-Biryani.jpg";

const Card = ({ name, cloudinaryImageId, cuisines, rating, time, locality }) => {
  const imglink = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className='card'>
      <img className='food-img' alt="image" src={imglink + cloudinaryImageId} />
      <div className='details'>
        <h3 className='restaurant-name'>{name}</h3>
        <div className='last-line'>
          <div className='rating'>
            {rating} *
          </div>
          <h5 className='time'>{time} min</h5>
        </div>
        <p className='cuisine'>{cuisines.slice(0, 2).join(", ")}</p>
        <p className='locality'>{locality}</p>
      </div>
    </div>
  )
}

export default Card
