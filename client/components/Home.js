import React, { useEffect } from "react";
import axios from "axios";
import { fetchUsers, fetchProducts, fetchUser } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import AdminProducts from "./AdminProducts";
import AdminUsers from "./AdminUsers";
import AdminUser from "./AdminUser";
import Cart from "./Cart";

const Home = () => {
  const dispatch = useDispatch();
  const { id, username, role } = useSelector((state) => state.auth);
  //isAdmin uses auth.role
  const isAdmin = role === "Admin";

  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    // isAdmin is a gatekeeper for fetching state
    if (isAdmin) {
      dispatch(fetchUsers());
      dispatch(fetchProducts());
    }
  }, []);

  // users list, click to bring up list (table?) component- delete button

  // products list, click to bring up list (table?) component - add button at top - edit, delete buttons on each product. Gets replaced by a form for edit or add
  console.log("state", username);
  return isAdmin ? (
    <>
      <h2>Hello Admin {username}</h2>

      <Link to="/home/AdminUsers">See Users</Link>
      <Link to="/home/AdminProducts">See Products</Link>
      {/* add product */}
      <Link to="/home/AdminAddProduct">Add Product</Link>
      {/* "refresh" without refreshing */}
      <Link to="/home">Clear</Link>
      <Link to="/home/cart">Cart</Link>

      {/* Begin Switches*/}
      <Switch>
        <Switch>
          {/*Product Table*/}
          <Route path="/home/AdminProducts">
            <AdminProducts products={products} />
          </Route>
          <Route path="home/AdminAddProduct"></Route>
          <Route path="home/AdminEditProduct/"></Route>
          {/* User Table*/}
          <Route exact path="/home/AdminUsers">
            <AdminUsers users={users} />
          </Route>
          <Route path={`/home/AdminUsers/:id`} component={AdminUser} />
          {/* User Cart*/}
          <Route path="/home/cart">
            <Cart />
          </Route>
        </Switch>
      </Switch>
    </>
  ) : (
    <>
      <h3>Welcome, {username}</h3>
      <Link to="/home">Clear</Link>
      <Link to="/home/cart">Cart</Link>
      <Switch>
        <Route path="/home/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
};

export default Home;
