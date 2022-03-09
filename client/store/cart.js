import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'

const GET_CART = 'GET_CART'

export const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  }
}

export const addToCart = (cartItem) => {
  return {
    type: ADD_TO_CART,
    cartItem,
  }
}

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/details/${userId}`, {
        headers: {
          authorization: window.localStorage.token,
        },
      })
      dispatch(getCart(data.orders[0]))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addToCartThunk = (orderId, productId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/carts/addToCart/${orderId}/${productId}`, {
        headers: {
          authorization: window.localStorage.token,
        },
      })
      console.log('addcartdata', data)
      dispatch(addToCart(data))
    } catch (error) {
      console.error('Problem adding to car', error)
    }
  }
}

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return action.cartItem
    default:
      return state
  }
}

// payload:{
// id: data.product.id,
// title: data.product.title,
// description: data.product.description,
// price: data.product.price,
// quantity: data.product.quantity,
// image: data.product.image,
// weight: data.product.weight,
// color: data.product.color
