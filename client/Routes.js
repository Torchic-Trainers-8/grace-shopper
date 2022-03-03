import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import Home from './components/Home'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
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
          <Redirect to="/home" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            {Login}
          </Route>
          <Route path="/login">{Login}</Route>
          <Route path="/signup">{Signup}</Route>
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
        </Switch>
      )}
    </div>
  )
}

export default Routes
