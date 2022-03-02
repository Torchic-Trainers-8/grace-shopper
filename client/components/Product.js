import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../store/product";
// import { setCartItem } from '../store'

const Product = ({ title, image, price, quantity, description, id, color }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function selectProduct(productId) {
  //     try {
  //       const res = await axios.get(`/api/products/${productId}`)
  //       const selectedProduct = res.data
  //       dispatch(setSelectedProduct(selectedProduct))
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }, [])

  return (
    <div>
      <div>Title: {title}</div>
      <div>Image: {image}</div>
      <div>Price: {price}</div>
      <div>Quantity: {quantity}</div>
      <div>Description: {description}</div>
      {/* <button onClick={setCartItem(id)}>Add to Cart</button> */}
    </div>
  );
};

export default Product;
