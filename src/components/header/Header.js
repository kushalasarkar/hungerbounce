import React from 'react'
import logo from './logo.jpg';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <img className='logo' src={logo}></img>
            <ul className='nav-list'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Contact Us</li>
            </ul>
        </div>
    )
}

export default Header