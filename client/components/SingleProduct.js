import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setCartItem } from '../store'
import axios from "axios";
import Products from "./Products";
import { getProduct } from "../store/product";
// import { Link } from "react-router-dom";

const singleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  //   const { title, image, price, quantity, description, id, product } = props;
  //console.log("PROPS", props);
  //const productId = useSelector((state) => state.product.id);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          `/api/products/${props.match.params.id}`
        );
        dispatch(getProduct(data));
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  //   return !props.product ? (
  //     <div>Loading Single Product Yarn...</div>
  //   ) : (
  return (
    <div>
      <div>Product Number: {id}</div>
      <div>Title: {title}</div>
      <img style={{ width: 200, height: 200 }} src={props.image} />
      <div>Price: {props.price}</div>
      <div>Quantity: {props.quantity}</div>
      <div>Description: {props.description}</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default singleProduct;

// <Link to={`/products/${product.id}`}></Link>
