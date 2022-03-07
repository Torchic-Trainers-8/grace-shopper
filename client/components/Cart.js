import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Products from "./Products";
import { getProduct } from "../store/product";
import { getUserCart } from "../store/user";
import Product from "./Product";
import { addToCart, getCart } from "../store/cart";

const Cart = (props) => {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.userCart);
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  // console.log("cart", cart);
  // console.log("state.cart", state.cart);

  //const { title, price } =
  //const { quantity } = cartQuantity;

  useEffect(() => {
    async function fetchCart() {
      try {
        const { data } = await axios.get(`/api/carts/${props.match.params.id}`);
        dispatch(getCart(data));
      } catch (error) {
        console.error("There is a problem finding this cart");
      }
    }
    fetchCart();
  }, []);
  console.log("cart", cart);

  //find all where userId === cartId

  return !cart ? (
    <div>Loading Cart... </div>
  ) : (
    <div>
      <div>Hello, this is your cart!</div>
      <br />
      <div key={product.id}></div>
      <Product product={product} />
      <br />
      {/* <div>Title:{title} </div>
      <div>Price: {price} </div>
       */}
      <button
        type="button"
        onClick={() => {
          addToCart;
        }}
      >
        Add to Cart
      </button>
      <div>{cart.map((item) => {})}</div>
      <div>Quantity: </div>
      <div>Total: </div>
    </div>
  );
};

export default Cart;
// //user { include: productId && userId}
// //look up table render a row of data with the quantity title and price
// // total price on page

/*
Deployed needs secrets working on production side of things
can make a user automatically have a cart when they are cerated
Adding the orders back in 

project board needs to be worked on better and more 


*/
