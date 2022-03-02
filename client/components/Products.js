import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Product from "./Product";
import { getProducts } from "../store/products";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    const products = state.products;
  });
  console.log("STATE", state);
  // useEffect(() => {
  //   async function fetchAlbums() {
  //     const { data } = await axios.get('/api/albums')
  //     dispatch(setAlbums(data))
  //   }
  //   fetchAlbums()
  // })
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get("/api/products");
        console.log("Got products");
        dispatch(getProducts(data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  return !products ? (
    <div>Hellooo</div>
  ) : (
    <div>
      <div>This is going to be if we have data</div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <Product props={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
