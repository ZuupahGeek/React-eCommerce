import React from 'react'
import { useSelector } from "react-redux";
import CartItem from './CartItem'

const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.shoppingCartReducer.shoppingCart)
  const totalCartAmount = useSelector(state => state.shoppingCartReducer.totalCartAmount)

  const emptyCart = (
    <div className="p-2 d-flex justify-content-center align-items-center">
      <p>Your cart is empty</p>
    </div>
  )
  const notEmptyCart = (
    <div className="">
      <div className="total-price">
        Total amount: <span>{totalCartAmount}</span>
      </div>
      <div>
        <button className="btn btn-sm btn-primary mb-2">Check out</button>
      </div>
    </div>
  )

  return (
    <div>
      
      {
        shoppingCart && shoppingCart.map(product => (
          <CartItem  key={product._id} product={product} />
        ))
      }
      {
        shoppingCart.length < 1 && emptyCart
      }
    
  
      
    <div className="dropdown-divider"></div>
    
    {
      shoppingCart.length !== 0 && notEmptyCart
    }
    


    </div>
  )
}

export default ShoppingCart
