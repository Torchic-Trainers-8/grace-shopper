import axios from "axios";

const GET_PRODUCT = "GET_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";

export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    product,
  };
};

export const editProduct = (editedProduct) => {
  return {
    type: EDIT_PRODUCT,
    editedProduct,
  };
};

export const increaseQuantity = (product) => {
  return {
    type: INCREASE_QUANTITY,
    product,
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: DECREASE_QUANTITY,
    product,
  };
};

//THUNCTIONS

export const fetchProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      const data = response.data;
      dispatch(getProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editedProductThunk = (editedProduct, history) => {
  return async (dispatch) => {
    try {
      const { id } = editedProduct;
      const { data } = await axios.put(`/api/products`, editedProduct);
      dispatch(editProduct(data));
      history.push(`/api/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

export const increaseProductThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.put(
        `/api/products/${id}/update/increase`
      );
      dispatch(increaseQuantity(product));
    } catch (error) {
      console.error("No products to increase");
    }
  };
};

export const decreaseProductThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data: product } = await axios.put(
        `/api/products/${id}/update/decrease`
      );
      dispatch(decreaseQuantity(product));
    } catch (error) {
      console.error("No products to decrease");
    }
  };
};
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product;
    case EDIT_PRODUCT:
      return action.product;
    case INCREASE_QUANTITY:
      return action.product;
    case DECREASE_QUANTITY:
      return action.product;
    default:
      return state;
  }
}
