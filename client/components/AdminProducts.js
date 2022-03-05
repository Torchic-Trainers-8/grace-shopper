import React from 'react'
import { Link } from 'react-router-dom'

export const AdminProducts = (props) => {
  const products = props.products
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>qty</th>
            <th>price</th>
          </tr>
        </thead>
        {products ? (
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <Link>{product.title}</Link>
                </td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                  <button>edit</button>
                  <button>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>Loading ...</tr>
          </tbody>
        )}
      </table>
    </>
  )
}
