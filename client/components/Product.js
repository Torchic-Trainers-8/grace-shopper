import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setCartItem } from '../store'
import axios from "axios";
import Products from "./Products";
import { getProduct } from "../store/product";
import { Link } from "react-router-dom";

const Product = (props) => {
  // const dispatch = useDispatch();
  // const product = useSelector((state) => state.product);
  const { title, image, price, id } = props.product;

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
  );
};

export default Product;
