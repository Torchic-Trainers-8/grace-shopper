import axios from "axios";
import React from "react";
import { useSelector, useDispatch, useState, useEffect } from "react-redux";

const Product = () => {
  const product = useSelector((state) => state.product);
  const [selectedProduct, setSelectedProduct] = useState("product");
  const dispatch = useDispatch();

  //   async function selectProject(productId) {
  //       try {
  //           const res = await axios.get(`/api/products/${productId}`);
  //           const selectedProduct = res.data;
  //           setSelectedProduct(selectedProduct);
  //       } catch (error) {
  //           console.log(error);
  //       }
  //   }
  return <div>Title: {project.title}</div>;
  return <div>Image: {project.image}</div>;
  return <div>Price: {project.price}</div>;
  return <div>Quantity: {project.quantity}</div>;
  return <div>Description: {project.description}</div>;
};

export default Product;
