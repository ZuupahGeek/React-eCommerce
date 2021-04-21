import React from 'react';
import {NavLink} from 'react-router-dom';
import {  } from "mdb-react-ui-kit";





const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-logo">
          <h2>LOGO</h2>
          <ul className="nav-links">
            <li><NavLink to="/" className="nav-link" activeClassName="active-link">Products</NavLink></li>
            <li><NavLink to="/orders" className="nav-link" activeClassName="active-link">Orders</NavLink></li>
          </ul>
        </div>
        <div className="navbar-nav">
        <li><NavLink to="/user" className="nav-link" activeClassName="active-link"><i className="fas fa-user-tie"></i></NavLink></li>
       </div>
       
      </div>
    </nav>
  )
}

export default Navbar
