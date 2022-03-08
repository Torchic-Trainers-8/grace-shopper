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
  console.log('cart', cart.products);

  return !order ? <div>Loading Order...</div> : <div>{order.id}</div>;
};

export default Cart;
