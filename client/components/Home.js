import React, { useEffect } from 'react'
import axios from 'axios'
import { getProducts } from '../store/products'
import { getUsers } from '../store/users'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const dispatch = useDispatch()
  const { id, username, role } = useSelector((state) => state.auth)

  const products = useSelector((state) => state.products)
  const users = useSelector((state) => state.users)

  const isAdmin = role === 'Admin'

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
      <Link>See Users</Link> {/* onClick will replace this with a table that maps users */}
      <Link
        onClick={() => {
          return (
            <table>
              <th>id</th>
              <th>title</th>
              <th>qty</th>
              <th>price</th>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>id: {product.id}</td>
                  <td>name: {product.title}</td>
                  <td>qty: {product.quantity}</td>
                  <td>price: {product.price}</td>
                </tr>
              ))}
            </table>
          )
        }}>
        See Products
      </Link>{' '}
      {/* onClick will replace this with a table that maps products */}
      {/* add product */}
      {/* <table>
        <th>id</th>
        <th>title</th>
        <th>qty</th>
        <th>price</th>
        {products.map((product) => (
          <tr>
            <td>id: {product.id}</td>
            <td>name: {product.title}</td>
            <td>qty: {product.quantity}</td>
            <td>price: {product.price}</td>
          </tr>
        ))}
      </table> */}
    </>
  ) : (
    <>
      <h3>Welcome, {username}</h3>
    </>
  )
}

export default Home
