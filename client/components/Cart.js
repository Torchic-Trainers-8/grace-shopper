import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Products from "./Products";
import { getProduct } from "../store";
import { getOrder } from "../store/order";
import Product from "./Product";
import { addToCart, getCart } from "../store/cart";

const Cart = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    async function orderThunk() {
      try {
        const { data } = await axios.get("/api/orders/details/1");
        console.log("data", props);
        dispatch(getOrder(data));
      } catch (error) {
        console.log(error);
      }
    }
    orderThunk();
  });
  console.log("ORDER", order);

  return !cart ? <div>Loading Cart... </div> : <div>Cart</div>;
};

export default Cart;
// // //user { include: productId && userId}
// // //look up table render a row of data with the quantity title and price
// // // total price on page

// /*
// Deployed needs secrets working on production side of things
// can make a user automatically have a cart when they are cerated
// Adding the orders back in

// project board needs to be worked on better and more

// */
