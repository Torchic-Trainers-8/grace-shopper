import axios from 'axios'

export const GET_USERS = 'GET_USERS'

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  }
}

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/users')
      dispatch(getUsers(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
