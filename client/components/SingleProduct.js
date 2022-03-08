import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store";
import { Link, useParams } from "react-router-dom";
import Carts from "./Carts";

const SingleProduct = (props) => {
  // o: you are going to want to use useParams from react-router-dom to get
  //  id so you can load a single product
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, image, price, quantity, description, id } = product;

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.id));
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
      <Link to="/carts">Add to Cart</Link>
    </div>
  );
};

export default SingleProduct;
