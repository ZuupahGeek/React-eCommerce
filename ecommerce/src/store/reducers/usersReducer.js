import actiontypes from '../actiontypes'


let initState = {
  user: null,
  users: null,
  authenticated: false,
  admin: false
}


const userReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().users.setUser:
      return {
        ...state,
        users: action.payload
      }

    default:
      return state
  }
}

export default userReducer;