import axios from "axios";

//Action Types

const GET_PRODUCTS = "GET_PRODUCTS";

const DELETE_PRODUCT = "DELETE_PRODUCT";

//Action Creators

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};

//Thunktions
// export const fetchProducts = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('/api/products')
//       const data = response.data
//       console.log('Got products')
//       dispatch(getProducts(data))
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

export const deleteProductThunk = (projectId, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      const data = response.data;
      console.log("this is delete prod thunk");
      dispatch(deleteProduct(data));
      history.push(`/api/products`);
    } catch (error) {
      console.log(error);
    }
  };
};
const initialState = [];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    case DELETE_PRODUCT:
      return {
        allRobots: state.products.filter(
          (product) => product.id !== action.product.id
        ),
      };
    default:
      return state;
  }
};
