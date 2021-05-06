import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="col-3 m-1 py-1 card bg-blue">
      <h5>firstName lastName</h5>
      <p>Email@email.com</p>
    </div>
  )
}

export default UserCard;
