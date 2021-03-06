import React from 'react'
import { addToCart } from "../store/actions/shoppingCartActions";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  return (
    <div className="card card-width my-3">
      <Link to={`/productdetails/${product._id}`}>
        <img src={ product.image } alt="" className="img-fluid" />
      </Link>
        <div className="card-body">
          <h5>{ product.name }</h5>
          <p>{ product.short }</p>
          <div className="d-flex justify-content-between">
            <small className="h5 text-red">{ product.price } ;-</small>
            <button className="btn btn-sm" onClick={() => {
              dispatch(addToCart(product)) }}>Add to Cart</button>
          </div>
        </div>  
   
    </div>
  )
}

export default ProductCard
