import React, { useEffect } from 'react'
import axios from 'axios'
import { getProducts } from '../store/products'
import { getUsers } from '../store/users'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import { AdminProducts } from './AdminProducts'
import { AdminUsers } from './AdminUsers'

const Home = () => {
  const dispatch = useDispatch()
  const { id, username, role } = useSelector((state) => state.auth)
  //isAdmin uses auth.role
  const isAdmin = role === 'Admin'

  const products = useSelector((state) => state.products)
  const users = useSelector((state) => state.users)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get('/api/users')
        dispatch(getUsers(data))
      } catch (error) {
        console.log(error)
      }
    }
    async function fetchProducts() {
      try {
        const { data } = await axios.get('/api/products')
        dispatch(getProducts(data))
      } catch (error) {
        console.log(error)
      }
    }
    // isAdmin is a gatekeeper for fetching state
    if (isAdmin) {
      fetchUsers()
      fetchProducts()
    }
  }, [])

  // users list, click to bring up list (table?) component- delete button

  // products list, click to bring up list (table?) component - add button at top - edit, delete buttons on each product. Gets replaced by a form for edit or add

  return isAdmin ? (
    <>
      <h2>Hello Admin {username}</h2>
      <Link to="/home/AdminUsers">See Users</Link>
      <Link to="/home/AdminProducts">See Products</Link>
      <Link to="/home/AdminAddProduct">Add Product</Link>
      <Link to="/home">Clear</Link>
      {/* add product */}
      <Switch>
        {/*Product Table*/}
        <Route path="/home/AdminProducts">
          <AdminProducts products={products} />
        </Route>
        {/* User Table*/}
        <Route path="/home/AdminUsers">
          <AdminUsers users={users} />
        </Route>
        <Route path="home/AdminAddProduct"></Route>
        <Route path="home/AdminEditProduct/"></Route>
        <Route path="home/cart"></Route>
      </Switch>
    </>
  ) : (
    <>
      <h3>Welcome, {username}</h3>
    </>
  )
}

export default Home
