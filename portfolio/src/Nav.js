import React from 'react';
import './App.css';
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <nav>
            <NavLink to='/'><h3 className='logo'>TH</h3></NavLink>
            <span className='nav-line'></span>
            <ul className='nav-links'>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? "link-selected" : "link")} style={{ textDecoration: 'none' }}>Home</NavLink></li>
                <li><NavLink to='/projects' className={({ isActive }) => (isActive ? "link-selected" : "link")} style={{ textDecoration: 'none' }} >Projects</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => (isActive ? "link-selected" : "link")} style={{ textDecoration: 'none' }}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;