import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOrder, getOrder } from '../store/order';
import { fetchCart, getCart } from '../store/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const order = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchOrder(id));
    dispatch(fetchCart(id));
  }, [id]);

  console.log('order', order);
  console.log('cart', cart);
  console.log('cart - products', cart.products);

  return !cart.products ? (
    <div>Loading Order...</div>
  ) : (
    <div>
      <div> Your Cart Items: </div>
      <div>
        {cart.products.map((cart) => (
          <div key={cart.id}>
            <div>{cart.id}</div>
            <img style={{ width: 200, height: 200 }} src={cart.image} />
            <div>{cart.title}</div>
            <div>Quantity: {cart.cart.cartQty}</div>
            {/* <div> order:{order}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
