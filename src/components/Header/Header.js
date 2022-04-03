import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/reviews'>Reviews</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
        </div>
    );
};

export default Header;