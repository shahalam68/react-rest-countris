/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='manu'>
                <a href="/home">Home</a>
                <a href="/Countries">Countries</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;