//maye should have edit and delete in here
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editedProductThunk } from "../store/product";
import { editProduct } from "../store/product";

function EditProduct(props) {
  const dispatch = useDispatch();
  const editedProduct = useSelector((state) => state.editedProduct);
  useEffect(() => {
    return async (dispatch) => {
      try {
        const { productId } = editedProduct;
        const response = await axios.put(`/api/products`, editedProduct);
        const data = response.data;
        dispatch(editProduct(data));
        history.push(`/products/${productId}`);
      } catch (error) {
        console.log(error);
      }
      editedProductThunk();
    };
  }, []);

  return (
    <div>
      <div>Hello Please edit</div>
      <div>
        <div>Product Number: {id}</div>
        <div>Title: {title}</div>
        <img style={{ width: 200, height: 200 }} src={image} />
        <div>Price: {price}</div>
        <div>Quantity: {quantity}</div>
        <div>Description: {description}</div>
      </div>
    </div>
  );
}

export default EditProduct;
