import React from 'react'

const Register = () => {
  return (
    <div className="container">
      <form>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline form-border">
        <input type="text" id="form3Example1" className="form-control" />
        <label className="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline form-border">
        <input type="text" id="form3Example2" className="form-control" />
        <label className="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div>

  {/* <!-- Email input --> */}
  <div className="form-outline mb-4 form-border">
    <input type="email" id="form3Example3" className="form-control" />
    <label className="form-label" for="form3Example3">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4 form-border">
    <input type="password" id="form3Example4" className="form-control" />
    <label className="form-label" for="form3Example4">Password</label>
  </div>


  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-blue btn-block mb-4">Sign up</button>

  
</form>
    </div>
  )
}

export default Register
