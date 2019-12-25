import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
 
const Header = () => (
    <div className='header'>
    <Link className='logo-container' to='/'>
        <img src='../../assets/Logo.jpg' alt='logo'/>
    </Link>
    <div className="options">
        <Link className='option' to='/shop'>
        SHOP
        </Link>
        <Link className='option' to='/shop'>
        CONTRACT
        </Link>
    </div>
</div>
)

export default Header;
