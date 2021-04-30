const actiontypes = () => {
  return {
    getProducts: {
      set: 'SET_PRODUCTS'
    },
    shoppingCart: {
      add: 'ADD_TO_CART',
      subtract: 'SUBTRACT_FROM_CART',
      delete: 'DELETE_FROM_CART'
    }
  }
}

export default actiontypes;