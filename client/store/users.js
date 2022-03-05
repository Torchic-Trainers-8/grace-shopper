import axios from 'axios'

const GET_USERS = 'GET_USERS'

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  }
}

const initialState = []

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
