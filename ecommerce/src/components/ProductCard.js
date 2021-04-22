import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="card card-width">
      <img src={ product.image} alt="" className="img-fluid" />
      <div className="card-body">
        <h5>{ product.name }</h5>
        <p>{ product.short }</p>
        <div className="d-flex justify-content-between">
          <small className="h5 text-danger">{ product.price } ;-</small>
          <button className="btn btn-sm">Add to Cart</button>
        </div>
      </div>  
    </div>
  )
}

export default ProductCard
