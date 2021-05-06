import React from 'react'
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (
    <div className="container">
      <form>
 
  <div className="form-outline form-border mb-4">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" for="form2Example1">Email address</label>
  </div>


  <div className="form-outline form-border mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" for="form2Example2">Password</label>
  </div>


  <button type="submit" className="btn btn-blue btn-block mb-4">Sign in</button>


  <div className="text-center">
    <p>Not a member? <NavLink to="/register">Register</NavLink></p>
  </div>
</form>
    </div>
  )
}

export default Login
