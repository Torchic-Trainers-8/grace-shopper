import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrder, getOrder, checkoutThunk } from "../store/order";
import {
  fetchCart,
  getCart,
  decreaseCartQuantityThunk,
  increaseCartQuantityThunk,
  deleteCartItemThunk,
} from "../store/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const order = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchOrder(id));
    dispatch(fetchCart(id));
  }, [id]);

  return !cart.products ? (
    <div>Loading Order...</div>
  ) : (
    <div>
      <div> Your Cart Items: </div>
      <div>
        {cart.products.map((cart) => (
          <div key={cart.id}>
            <img style={{ width: 200, height: 200 }} src={cart.image} />
            <div>{cart.title}</div>
            <div>Quantity: {cart.cart.cartQty}</div>
            {/* <div> order:{order}</div> */}
            <button
              type="button"
              onClick={() => {
                dispatch(increaseCartQuantityThunk(order.id, cart.id));
              }}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(decreaseCartQuantityThunk(order.id, cart.id));
              }}
            >
              -
            </button>
            <br />
            <button
              type="button"
              onClick={() => {
                dispatch(deleteCartItemThunk(order.id, cart.id));
              }}
            >
              Remove Item
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            dispatch(checkoutThunk(order.id));
            location.reload();
            window.alert("Thank you for your purchase!");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
