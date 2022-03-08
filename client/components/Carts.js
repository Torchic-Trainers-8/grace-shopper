import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../store/";
import { Link } from "react-router-dom";
import { fetchOrder, getOrder } from "../store/order";

const Carts = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const { id } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchOrder(id));
  });
  return <div>{orders}</div>;
};

export default Carts;
