import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';

const GET_CART = 'GET_CART';

export const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/details/${userId}`);
      dispatch(getCart(data.orders[0]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCartThunk = (orderId, productId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/carts/addToCart/${orderId}/${productId}`
      );
      dispatch(addToCartThunk(data));
    } catch (error) {
      console.error('Problem adding to cart');
    }
  };
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      return [...state, action.cart.product];
    default:
      return state;
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
