import React, { Component, Fragment, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import SingleProduct from "./components/singleProduct";
import { me } from "./store";

/**
 * COMPONENT
 */

const Routes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:productId" component={SingleProduct} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            {Login}
          </Route>
          <Route path="/login">{Login}</Route>
          <Route path="/signup">{Signup}</Route>
          <Route exact path="/products" component={Products} />
          <Route path="/products/:productId" component={SingleProduct} />
        </Switch>
      )}
    </div>
  );
};

export default Routes;
/*
I changed the routes up there to go to single product and changed it to have products/:productId here
and in the thunk and in the router for single product. 
*/
