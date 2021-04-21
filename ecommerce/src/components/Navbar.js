import React from 'react';
import { NavLink } from 'react-router-dom';





const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>LOGO</h2>
      <ul className="nav-links">
        <li><NavLink exact path="/" className="nav-link" activeClassName="active-link"></NavLink></li>
        <li><NavLink exact path="/login" className="nav-link" activeClassName="active-link"></NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
