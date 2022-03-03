import axios from "axios";

const GET_PRODUCT = "GET_PRODUCT";

export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    product,
  };
};

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/api/products/:productId");
      const data = response.data;
      dispatch(getProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
