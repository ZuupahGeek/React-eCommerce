import React from 'react'
import {NavLink} from 'react-router-dom';
const Home = () => {
  return (
    <div className="container">
      <NavLink to="/admin">Admin-page</NavLink> <br/>
      <NavLink to="/login">Login</NavLink> <br/>
      <NavLink to="/register">Register</NavLink> <br/>
      <NavLink to="/orders">Orders</NavLink> <br/>
    </div>
  )
}

export default Home
