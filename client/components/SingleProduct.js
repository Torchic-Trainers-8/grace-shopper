import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartThunk, fetchProduct, fetchOrder } from "../store";
import { Link, useParams } from "react-router-dom";

const SingleProduct = (props) => {
  // o: you are going to want to use useParams from react-router-dom to get
  //  id so you can load a single product
  const dispatch = useDispatch();
  // const []
  const product = useSelector((state) => state.product);
  const { title, image, price, quantity, description, id } = product;
  const order = useSelector((state) => state.order);
  const userId = useSelector((state) => state.auth.id);
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.id));
    dispatch(fetchOrder(userId));
  }, []);
  console.log("req.user", userId);
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
      <button
        type="button"
        onClick={() => {
          dispatch(addToCartThunk(order.id, props.match.params.id));
        }}
      >
        Add to Cart
      </button>
      {/* <Link to="/cart">Your Cart</Link> */}
    </div>
  );
};

export default SingleProduct;
