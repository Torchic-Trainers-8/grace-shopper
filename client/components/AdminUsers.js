import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import AdminUser from './AdminUser'

export default function (props) {
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
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/home/AdminUsers/${user.id}`}>edit</Link>
                {/* <Link to={`/home/AdminDeleteUser/${user.id}`}>delete</Link> */}
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
