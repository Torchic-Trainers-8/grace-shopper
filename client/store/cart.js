import axios from "axios";
const ADD_TO_CART = "ADD_TO_CART";
const GET_CART = "GET_CART";
const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";

export const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

export const addToCart = (cartItem) => {
  return {
    type: ADD_TO_CART,
    cartItem,
  };
};

export const increaseCartQuantity = (cartItem) => {
  return {
    type: INCREASE_CART_ITEM,
    cartItem,
  };
};

export const decreaseCartQuantity = (cartItem) => {
  return {
    type: DECREASE_CART_ITEM,
    cartItem,
  };
};

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/details/${userId}`, {
        headers: {
          authorization: window.localStorage.token,
        },
      });
      dispatch(getCart(data.orders[0]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCartThunk = (orderId, productId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/carts/addToCart/${orderId}/${productId}`,
        {
          headers: {
            authorization: window.localStorage.token,
          },
        }
      );
      dispatch(addToCart(data));
    } catch (error) {
      console.error("Problem adding to car", error);
    }
  };
};

export const increaseCartQuantityThunk = (orderId, productId) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.put(
        `/api/carts/increaseCart/${orderId}/${productId}`
      );
      dispatch(increaseCartQuantity(cart));
      dispatch(fetchCart(orderId));
    } catch (error) {
      console.error("No products to increase");
    }
  };
};

export const decreaseCartQuantityThunk = (orderId, productId) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.put(
        `/api/carts/decreaseCart/${orderId}/${productId}`
      );
      dispatch(decreaseCartQuantity(cart));
      dispatch(fetchCart(orderId));
    } catch (error) {
      console.error("No products to decrease");
    }
  };
};

export const deleteCartItemThunk = (orderId, productId) => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.delete(
        `/api/carts/deleteCart/${orderId}/${productId}`
      );
      // dispatch(deleteCartItemThunk(cart));
      dispatch(fetchCart(orderId));
    } catch (error) {
      console.error("No items to delete");
    }
  };
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      return action.cartItem;
    case INCREASE_CART_ITEM:
      return action.cartItem;
    case DECREASE_CART_ITEM:
      return action.cartItem;
    default:
      return state;
  }
}
