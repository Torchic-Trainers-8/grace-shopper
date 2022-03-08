import axios from "axios";
export const GET_ORDER = "GET_ORDER";

export const GET_CART = "GET_CART";

const ADD_TO_CART = "ADD_TO_CART";

export const getOrder = (order) => {
  return {
    type: GET_ORDER,
    order,
  };
};

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

export const fetchOrder = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `/api/orders/findOrCreateOrder/${userId}`
      );
      const data = response.data;
      dispatch(getOrder(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/details/${userId}`);
      dispatch(getCart(data.orders[0]));
    } catch (error) {
      next(error);
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
      console.error("Problem adding to cart");
    }
  };
};
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order;
    case GET_CART:
      return action.cart.products;
    case ADD_TO_CART:
      return [...state, action.products];
    default:
      return state;
  }
}
