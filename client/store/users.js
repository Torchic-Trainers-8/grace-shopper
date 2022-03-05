export const GET_USERS = 'GET_USERS'

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
