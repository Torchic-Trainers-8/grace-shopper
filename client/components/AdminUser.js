import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../store'
import { Link, useParams } from 'react-router-dom'

function AdminUser(props) {
  const dispatch = useDispatch()
  const { id, username, role } = useSelector((state) => state.auth)
  //isAdmin uses auth.role
  const isAdmin = role === 'Admin'
  const user = useSelector((state) => state.user)
  const userId = props.match.params.id
  // const param = useParams()

  useEffect(() => {
    //add func here
    // if (isAdmin) {
    // dispatch(fetchUser(userId))
    // }
  }, [])

  return (
    <form>
      <input></input>
      <input></input>
      <input></input>
      <button type="submit">Edit User</button>
    </form>
  )
}
export default AdminUser
