import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  // const dispatch = useDispatch()
  //const [products, setProducts] = useState([]);
  const products = [
    {
      id: 1,
      title: "Beach Bum",
    },
    {
      id: 2,
      title: "Bikini Bottom",
    },
    {
      id: 3,
      title: "Blackberry Smash",
    },
    {
      id: 4,
      title: "Blood Orange Martini",
    },
    {
      id: 5,
      title: "Blood Orange Tea",
    },
    {
      id: 6,
      title: "Blue Velvet",
    },
    {
      id: 7,
      title: "Body Electric",
    },
    {
      id: 8,
      title: "Born to Die",
    },
  ];

  // useEffect(() => {
  //   setProducts(useSelector((state) => state.products));
  // }, []);

  return !products.length ? (
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
