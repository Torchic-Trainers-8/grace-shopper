import React, { useEffect } from 'react'
import axios from 'axios'
import { getProducts } from '../store/products'
import { getUsers } from '../store/users'
import { useSelector, useDispatch } from 'react-redux'

const Home = (props) => {
  const dispatch = useDispatch()
  const username = useSelector((state) => state.auth.username)
  const role = useSelector((state) => state.user.role)
  const isAdmin = role === 'Admin'

  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data } = await axios.get('/api/products')
        dispatch(getUsers(data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('/api/products')
        dispatch(getProducts(data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  // users list, click to bring up list (table?) component- delete button

  // products list, click to bring up list (table?) component - add button at top - edit, delete buttons on each product. Gets replaced by a form for edit or add

  return isAdmin ? (
    <div>
      <p>hello, Admin {username}/</p>
    </div>
  ) : (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  )
}

export default Home
