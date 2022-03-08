import React, { useEffect } from 'react'
import { fetchUser } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import Cart from './Cart'

const User = (props) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUser(props.match.params.id))
  }, [])
  return (
    <div className="user">
      <div>Username: {username}</div>
      <Cart cart={Cart} />
    </div>
  )
}

export default User

//user include order include product
