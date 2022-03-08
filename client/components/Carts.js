import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../store/";
import { Link } from "react-router-dom";
import {
  fetchOrder,
  getOrder,
  getCart,
  fetchCart,
  addToCart,
} from "../store/order";
import { getProduct } from "../store";

const Carts = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const { id } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, []);

  useEffect(() => {
    dispatch(fetchCart(id));
    // dispatch(addToCartThunk(order.id, product.id));
  }, []);

  console.log("order", order);
  console.log("cart", cart);
  // return !cart ? (
  //   <div>Loading...</div>
  // ) : (
  return (
    <div>
      {/* {if(cart.length > 0)  */}
      <Product product={product} />
      <button
        type="button"
        onClick={() => {
          addToCart;
        }}
      >
        Add to Cart
      </button>
      <div> Your Cart Items: </div>
      {cart.map((cart) => (
        <div key={cart.id}>
          <div>{cart.id}</div>
          <img style={{ width: 200, height: 200 }} src={cart.image} />
          <div>{cart.title}</div>
          <div>Quantity: {cart.cart.cartQty}</div>
          {/* <div> order:{order}</div> */}
        </div>
      ))}
    </div>
  );
};

// I had quantity before but the variable product was confliting with <Product =product{product}>
// so i renamed the map to cart => instead of product and I couldn't get quantity anymore

export default Carts;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Product from "./Product";
// import { fetchProducts } from "../store/";
// import { Link } from "react-router-dom";
// import {
//   fetchOrder,
//   getOrder,
//   getCart,
//   fetchCart,
//   addToCart,
// } from "../store/order";
// import { getProduct } from "../store";

// const Carts = () => {
//   const dispatch = useDispatch();
//   const order = useSelector((state) => state.order);
//   const { id } = useSelector((state) => state.auth);
//   const cart = useSelector((state) => state.cart);
//   //const product = useSelector((state) => state.product);

//   useEffect(() => {
//     dispatch(fetchOrder(id));
//   }, []);

//   useEffect(() => {
//     dispatch(fetchCart(id));
//   }, []);
//   console.log("cart", cart);
//   console.log("cart", cart.cartQty);
//   return (
//     <div>
//       {/* {if(cart.length > 0)  */}
//       {/* <Product product={product} /> */}
//       <button
//         type="button"
//         onClick={() => {
//           addToCart;
//         }}
//       >
//         Add to Cart
//       </button>
//       <div> Your Cart Items: </div>
//       {cart.map((product) => (
//         <div key={product.id}>
//           <div>{product.id}</div>
//           <img style={{ width: 200, height: 200 }} src={product.image} />
//           <div>{product.title}</div>
//           <div>Quantity: {cart.cartQty}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// //I had quantity before but the variable product was confliting with <Product =product{product}>
// //so i renamed the map to cart => instead of product and I couldn't get quantity anymore

// export default Carts;
