import axios from 'axios'

//Action Types

const GET_PRODUCTS = 'GET_PRODUCTS'

//Action Creators

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products,
  }
}

//Thunktions
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/products')
      const data = response.data
      console.log('Got products')
      dispatch(getProducts(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = []

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
