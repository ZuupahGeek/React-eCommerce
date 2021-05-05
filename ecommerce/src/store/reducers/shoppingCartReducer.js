import actiontypes from '../actiontypes'

const initState = {
  shoppingCart: [],
  totalCartQuantity: 0, // antal produkter i kundvagnen
  totalCartAmount: 0, // total kostnad
 
}


const shoppingCartReducer = (state = initState, action) => {

  let itemIndex;


  switch(action.type){
    // Lägg till produkt och/eller quantity
    case actiontypes().shoppingCart.add:
      try {
        itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload._id)
        let cartProduct = {
          ...action.payload,
          quantity: 1
        }
        itemIndex < 0
        ? state.shoppingCart = [...state.shoppingCart, cartProduct]
        : state.shoppingCart[itemIndex].quantity += 1


        state.totalCartAmount = getTotalAmount(state.shoppingCart)
        state.totalCartQuantity = getTotalQuantity(state.shoppingCart)

      }
        catch(err) {console.log(err)}
        return state

        // Ta bort en från enstaka produkt
      case actiontypes().shoppingCart.subtract:
        try {
          itemIndex = state.shoppingCart.findIndex(product => product._id === action.payload)

          state.shoppingCart[itemIndex].quantity === 1
          ? state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)
          : state.shoppingCart[itemIndex].quantity -= 1
         

          state.totalCartAmount = getTotalAmount(state.shoppingCart)
          state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
        }
        catch(err) {console.log(err)}
        return state

        // to bort hela produkten och alla dess quantity
        case actiontypes().shoppingCart.delete:
          state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload)

          state.totalCartAmount = getTotalAmount(state.shoppingCart)
          state.totalCartQuantity = getTotalQuantity(state.shoppingCart)
          return state

        default:
          return state
  } // end of Switch
}

const getTotalQuantity = ShoppingCart => {
  let total = 0;

  ShoppingCart.forEach(product => {
    total += product.quantity
  });
  return total;
}

const getTotalAmount = ShoppingCart => {
  let total = 0;

  ShoppingCart.forEach(product => {
    total += product.price * product.quantity
  });
  return total;
}





export default shoppingCartReducer;