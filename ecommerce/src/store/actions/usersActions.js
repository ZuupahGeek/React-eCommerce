import axios from 'axios'
import actiontypes from '../actiontypes'

export const getUsers = () => {
  
  return async dispatch => {
    const res = await axios.get('http://localhost:9999/api/users')
    dispatch(setUsers(res.data))
  }
}

export const setUsers = users => {
  return {
    type: actiontypes().users.setUsers,
    payload: users
  }
}