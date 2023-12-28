import React from 'react'
import Card from './Card';
import './Cards.css'

const Cards = () => {
  return (
    <div className='card-container'>
      <Card name={"KFC"}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Cards