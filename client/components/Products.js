import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../store/";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("products", products);
  return !products ? (
    <div>Loading Products...</div>
  ) : (
    <div className="products">
      {products.map((product) => (
        <div key={product.id}>
          {/*
            o: rather than using two brs here you can just add
              padding to Product
          */}
          <br />
          <Product product={product} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Products;
