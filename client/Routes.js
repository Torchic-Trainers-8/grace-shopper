import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import Home from './components/Home'
import Products from './components/Products'
import Admin from './components/Admin'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import EditProduct from './components/EditProduct'
import Error404 from './components/Error404'
import { me } from './store'

const Routes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route exact path="/Admin" component={Admin} />
          <Route path="/Admin/EditProduct" component={EditProduct} />
          <Route path="/Cart" component={Cart} />
          <Redirect to="/home" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            {Login}
          </Route>
          <Route path="/login">{Login}</Route>
          <Route path="/signup">{Signup}</Route>
          <Route path="/Cart" component={Cart} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/Cart" component={Cart} />
          <Route path="*" component={Error404} />
        </Switch>
      )}
    </div>
  )
}

export default Routes
