import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Products from "./Products";
import { getProduct } from "../store/product";

const Cart = (props) => {
  return (
    <div>Hello, this is your cart!</div>
    // <div>Cart Quantity: </div>
  );
};

export default Cart;
//user { include: productId && userId}
