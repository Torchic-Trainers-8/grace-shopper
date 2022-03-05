import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProduct } from "../store/product";

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, image, price, quantity, description, id } = product;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          `/api/products/${props.match.params.id}`
        );
        dispatch(getProduct(data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return !product ? (
    <div>Loading Single Product Yarn...</div>
  ) : (
    <div>
      <div>Product Number: {id}</div>
      <div>Title: {title}</div>
      <img style={{ width: 200, height: 200 }} src={image} />
      <div>Price: {price}</div>
      <div>Quantity: {quantity}</div>
      <div>Description: {description}</div>
      <button>Add to Cart</button>
      {/* <form onSubmit={handleSubmit}></form> */}
    </div>
  );
};

export default SingleProduct;
