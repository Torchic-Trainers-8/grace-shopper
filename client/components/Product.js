import React from 'react'
import { useDispatch } from 'react-redux'
// import { setCartItem } from '../store'

const Product = (props) => {
  // const dispatch = useDispatch()
  const { title, image, price, quantity, description, id } = props.product

  // useEffect(() => {
  //   async function fetchProduct() {
  //     try {
  //       const { data } = await axios.get(`/api/products/${productId}`)
  //       dispatch(getProduct(data))
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchProduct()
  // })

  // <Link to={`/products/${product.id}`}></Link>

  return !props.product ? (
    <div>Loading Yarn...</div>
  ) : (
    <div>
      <div>Product Number: {id}</div>
      <div>Title: {title}</div>
      <img style={{ width: 200, height: 200 }} src={image} />
      <div>Price: {price}</div>
      <div>Quantity: {quantity}</div>
      <div>Description: {description}</div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
