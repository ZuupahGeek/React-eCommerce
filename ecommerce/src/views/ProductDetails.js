import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import { getOneProduct, setProduct } from '../store/actions/getProductsActions';

const ProductDetails = () => {

  const id = useParams()._id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id))

    return () => {
      dispatch(setProduct(product))
    }
  }, [dispatch, id])

  const product = useSelector(state => state.getProductsReducer.product)


  return (
    <div className="container border d-flex justify-content-around">
      <div className=" ">
        <img  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.23MJlmuBrxTyB_zQ8yhUvgHaHa%26pid%3DApi&f=1" 
              alt=""  className="details-image"/>
       
        
        
      </div>
      <div className="details-details py-5">
        <h4>{product.name}</h4>
        <span className="text-red h5">Product Price</span>
        <p className="mt-5">product description</p>
        
      </div>
      
      
    </div>
  )
}

export default ProductDetails
