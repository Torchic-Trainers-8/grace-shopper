import axios from 'axios'
export const GET_ORDER = 'GET_ORDER'

export const getOrder = (order) => {
  return {
    type: GET_ORDER,
    order,
  }
}

export const fetchOrder = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/orders/findOrCreateOrder/${userId}`, {
        headers: {
          authorization: window.localStorage.token,
        },
      })
      const data = response.data
      dispatch(getOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    default:
      return state
  }
}
