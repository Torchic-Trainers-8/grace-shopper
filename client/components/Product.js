import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  // const dispatch = useDispatch();
  // const product = useSelector((state) => state.product);
  const { title, image, price, id } = props.product

  return !props.product ? (
    <div>Loading Product Yarn...</div>
  ) : (
    <div>
      <Link to={`/products/${id}`}>
        <img style={{ width: 200, height: 200 }} src={image} />
        <div>Title: {title}</div>
        <div>Price: {price}</div>
      </Link>
    </div>
  )
}

export default Product
