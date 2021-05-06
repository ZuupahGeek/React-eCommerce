import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getUsers} from '../../store/actions/usersActions'

import UserCard from './UserCard'

const UserList = () => {


  const dispatch = useDispatch();
  const usersReducer = useSelector(state => state.usersReducer.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])


  return (
    <div className="container">
      <h3 className="mb-3  text-center">Users Registered</h3>
      <div className="row d-flex justify-content-center">
        {
          usersReducer && usersReducer.map(user => (
            <UserCard key={user._id} user={user}/>
          ))
        }
     
      </div>
    </div>
  )
}

export default UserList
