import axios from "axios";
import { fetchCart } from "./cart";
export const GET_ORDER = "GET_ORDER";
const CHECKOUT = "CHECKOUT";

export const getOrder = (order) => {
  return {
    type: GET_ORDER,
    order,
  };
};
export const checkout = (order) => {
  return {
    type: CHECKOUT,
    order,
  };
};
export const fetchOrder = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/api/orders/findOrCreateOrder/${userId}`,
        {
          headers: {
            authorization: window.localStorage.token,
          },
        }
      );
      const data = response.data;
      dispatch(getOrder(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const checkoutThunk = (orderId) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`api/orders/purchase/${orderId}`, {
        headers: {
          authorization: window.localStorage.token,
        },
      });

      const data = response.data;
      console.log("data", data);
      dispatch(checkout(data));
      dispatch(fetchCart(data.userId));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order;
    case CHECKOUT:
      return action.order;
    default:
      return state;
  }
}
