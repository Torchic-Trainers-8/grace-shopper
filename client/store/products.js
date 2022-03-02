import axios from "axios";

//Action Types
const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";

//Action Creators
export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    project,
  };
};
export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    project,
  };
};

//Thunktions

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/:productId");
      const data = response.data;
      dispatch(getProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/:productId");
      const data = response.data;
      dispatch(getProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};
