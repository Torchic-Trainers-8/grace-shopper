import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Product from './Product'
import { deleteProduct, getProducts, fetchProducts } from '../store/'

//Should have add project in here i think

function Admin(props) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    async function deleteProductThunk() {
      try {
        const response = await axios.delete(`/api/products/${props.match.params.id}`)
        const data = response.data
        dispatch(deleteProduct(data))
        history.push(`/api/products`)
      } catch (error) {
        console.log(error)
      }
      deleteProductThunk()
    }
  }, [])

  return (
    <div>
      <div>Hello</div>
      <form>
        {products.map((product) => (
          <div key={product.id}>
            <br />
            <Product product={product} />
            <br />
            <button>Delete Product</button>
          </div>
        ))}
      </form>
    </div>
  )
}

export default Admin
