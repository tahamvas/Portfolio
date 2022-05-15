import React from 'react'
import './App.css';
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <nav className='nav-footer'>
            <ul className='nav-links-footer'>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? "link-selected" : "link")} style={{ textDecoration: 'none' }}>Home</NavLink></li>
                <li><NavLink to='/projects' className={({ isActive }) => (isActive ? "link-selected" : "link")} style={{ textDecoration: 'none' }} >Projects</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive }) => (isActive ? "link-selected" : "link")} style={{ textDecoration: 'none' }}>Contact</NavLink></li>
            </ul>
        </nav>
  )
}

export default Footer