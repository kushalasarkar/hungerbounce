import React from 'react'
import logo from './logo.jpg';
import './Header.css'
import {Link, NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={logo}></img>
            <ul className='nav-list'>
                <li className='nav-item'><NavLink to="/" className={({isActive})=>(isActive ? 'active':'inactive')}>Home</NavLink></li>
                <li className='nav-item'><NavLink to="/about">About</NavLink></li>
                <li className='nav-item'><NavLink to="/contact">Contact Us</NavLink></li>
                <li className='nav-item'><NavLink to="/cart">Cart</NavLink></li>
            </ul>
        </div>
    )
}

export default Header