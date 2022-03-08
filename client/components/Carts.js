import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../store/";
import { Link } from "react-router-dom";
import { fetchOrder, getOrder, getCart, fetchCart } from "../store/order";

const Carts = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const { id } = useSelector((state) => state.auth);
  const carts = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(fetchOrder(id));
  });

  useEffect(() => {
    dispatch(fetchCart(id));
  });
  return (
    <div>
      <div>{orders}</div>
      <div>{carts}</div>
    </div>
  );
};

export default Carts;
