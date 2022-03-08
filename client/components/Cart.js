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
  //const { id, isPurchased, orderId } = props.order;
  // this.handleIncreaseQuantity = this.handleIncrease.bind(this);
  // this.handleDecreaseQuantity = this.handleDecrease;
  // .bind(this)
  //const { title, price } =
  //map through orders to get user id and use the user id to get the cart
  //filter down to the

  // useEffect(() => {
  //   async function fetchCart() {
  //     try {
  //       const { data } = await axios.get(`/api/carts/${props.match.params.id}`);
  //       dispatch(getCart(data));
  //     } catch (error) {
  //       console.error("There is a problem finding this cart");
  //     }
  //   }
  //   fetchCart();
  // }, []);

  //find all where userId === cartId
  // useEffect(() => {
  //   async function increaseProductThunk() {
  //     try {
  //       const { data: product } = await axios.put(
  //         `/api/products/${id}/update/increase`
  //       );
  //       dispatch(increaseQuantity(product));
  //     } catch (error) {
  //       console.error("No products to increase");
  //     }
  //   }
  //   increaseProductThunk();
  // });

  // useEffect(() => {
  //   async function decreaseProductThunk() {
  //     try {
  //       const { data: product } = await axios.put(
  //         `/api/products/${id}/update/decrease`
  //       );
  //       dispatch(decreaseQuantity(product));
  //     } catch (error) {
  //       console.error("No products to decrease");
  //     }
  //   }
  //   decreaseProductThunk();
  // });

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

  return !cart ? (
    <div>Loading Cart... </div>
  ) : (
    <div className="cart">
      <div>Hello, this is your cart!</div>
      <br />
      <div key={product.id}></div>
      <Product product={product} />
      <br />

      {/* <div>Quantity: {cart.product.quantity}</div> */}
      <button
        type="button"
        onClick={() => {
          handleIncreaseQuantity;
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          handleDecreaseQuantity;
        }}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => {
          addToCart;
        }}
      >
        Add to Cart
      </button>
      <div>
        {/* {if(cart.length > 0)  */}

        {cart.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </div>
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
