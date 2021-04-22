import actiontypes from '../actiontypes'

const initState = null;

const getProductsReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().getProducts.set:
      state = action.payload
    return state


    default:
      return state
  }
}

export default getProductsReducer;