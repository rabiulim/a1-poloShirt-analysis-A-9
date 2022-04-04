import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='bg-indigo-400 p-4 text-white font-bold'>
            <NavLink className='m-10  text-3xl' to='/'>Home</NavLink>
            <NavLink className='m-10 text-3xl' to='/reviews'>Reviews</NavLink>
            <NavLink className='m-10 text-3xl ' to='/dashboard'>Dashboard</NavLink>
            <NavLink className='m-10 text-3xl' to='/blogs'>Blogs</NavLink>
        </div>
    );
};

export default Header;