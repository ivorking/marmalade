import React, {Component} from "react";
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

const Header = props => (
    <header className='black mb5 pt5'>
        { /* FeaturedMix */}
        <h1 className= 'ttu f3 tracked-mega anton tc mt0 mb3'>Marmalade</h1>
        <ul className= 'list flex justify-center pl0'>

            {/* First line need exact */}
            <li className='mh2'>
                <NavLink exact to='/' className = 'nav-link link black biryani-black f6 ttu gray'>what's hot</NavLink>
            </li>

            <li className='mh2'>
                <NavLink to='/archive' className = 'nav-link link black biryani-black f6 ttu gray'>archive</NavLink>
            </li>

            <li className='mh2'>
                <NavLink to='/about' className = 'nav-link link black biryani-black f6 ttu gray'>about</NavLink>
            </li>

        </ul>
    </header>
);

export default Header
