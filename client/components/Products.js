import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product'
import { getProducts } from '../store/products'
import { Link } from 'react-router-dom'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

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

  return !products ? (
    <div>Loading Products...</div>
  ) : (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {/*
            o: rather than using two brs here you can just add
              padding to Product
          */}
          <br />
          <Product product={product} />
          <br />
        </div>
      ))}
    </div>
  )
}

export default Products
