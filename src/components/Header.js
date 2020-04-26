import React, {Component} from "react";

const Header = props => (
    <header className='black mb5 pt5'>
        { /* FeaturedMix */}
        <h1 className= 'ttu f3 tracked-mega anton tc mt0 mb3'>Marmalade</h1>
        <ul className= 'list flex justify-center pl0'>

            <li className='mh2'>
                <a className = 'nav-link link black biryani-black f6 ttu gray'>what's hot</a>
            </li>

            <li className='mh2'>
                <a className = 'nav-link link black biryani-black f6 ttu gray'>archive</a>
            </li>

            <li className='mh2'>
                <a className = 'nav-link link black biryani-black f6 ttu gray'>about</a>
            </li>

        </ul>
    </header>
);

export default Header
