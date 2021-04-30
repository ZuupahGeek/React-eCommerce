import React from 'react'
import CartItem from './CartItem'

const ShoppingCart = () => {
  return (
    <div>
      

    <CartItem />
    <CartItem />
    <CartItem />

    <div className="dropdown-divider"></div>

    <div className="">
      <div className="total-price">
        Total amount: <span>insert total amount</span>
      </div>
      <div>
        <button className="btn btn-sm btn-primary mb-2">Check out</button>
      </div>
    </div>


    </div>
  )
}

export default ShoppingCart
