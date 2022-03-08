import axios from "axios";

//Action Types

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

//Action Creators

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products,
  };
};

export const addProduct = (newProduct) => {
  return {
    type: ADD_PRODUCT,
    newProduct,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};

//Thunktions

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products', {
        headers: {
          authorization: window.localStorage.token
        }
      })
      dispatch(getProducts(data))
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProductThunk = (newProduct) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/products", newProduct);
      const data = response.data;
      dispatch(addProduct(data));
    } catch (error) {
      console.error("There was an error loading new product");
    }
  };
};

export const deleteProductThunk = (id, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      const data = response.data;
      dispatch(deleteProduct(data));
      history.push(`/api/products`);
    } catch (error) {
      console.log(error);
    }
  };
};
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state, action.newProduct],
      };
    case DELETE_PRODUCT:
      return {
        ...state.products.filter((product) => product.id !== action.product.id),
      };
    default:
      return state;
  }
}
