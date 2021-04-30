import React from 'react';
import {NavLink} from 'react-router-dom';
import ShoppingCart from './shoppingCart/ShoppingCart'






const Navbar = () => {
  return (
    <nav className="navbar mb-4">
      <div className="container">
        <div className="nav-logo ">
          <NavLink className="navbar-brand text-white" to="/">Yummy<i className="fas fa-pizza-slice"></i></NavLink>
          <ul className="nav-links d-flex align-items-center">
            <li><NavLink to="/" className="nav-link" activeClassName="active-link">Products</NavLink></li>
            <li><NavLink to="/orders" className="nav-link" activeClassName="active-link">Orders</NavLink></li>
          </ul>
        </div>
        <div>
          <ul className="d-flex">
            <li><NavLink to="/user" className="nav-link"><i className="fas fa-user-tie"></i></NavLink></li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-luggage-cart"></i>
              </span>
            {/* Dropdown menu */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-width" aria-labelledby="navbarDropdown">
               <ShoppingCart />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
