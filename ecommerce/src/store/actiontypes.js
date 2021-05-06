const actiontypes = () => {
  return {
    getProducts: {
      getProducts: 'GET_PRODUCTS',
      setProducts: 'SET_PRODUCTS',
      setProduct: 'SET_PRODUCT',
    },
    shoppingCart: {
      add: 'ADD_TO_CART',
      subtract: 'SUBTRACT_FROM_CART',
      delete: 'DELETE_PRODUCT'
    },
    users: {
      getUsers: 'GET_USERS',
      setUser: 'SET_USER',
      setUsers: 'SET_USERS',
      login: 'LOGIN',
      logout: 'LOGOUT'
    }
  }
}

export default actiontypes;