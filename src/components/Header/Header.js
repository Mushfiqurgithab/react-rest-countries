import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my React Countries Website.</h1>
            <nav className='menu'>
                <a href='home'>Home</a>
                <a href='shop'>Countries</a>
                <a href='about us'>About us</a>
            </nav>
        </div>
    );
};

export default Header;