import React from 'react'
import { Link } from 'react-router-dom'

export const AdminUsers = (props) => {
  const users = props.users
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>role</th>
        </tr>
      </thead>
      {users ? (
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link>{user.username}</Link>
              </td>
              <td>{user.role}</td>
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
  )
}
