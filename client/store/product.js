import axios from "axios";

const GET_PRODUCT = "GET_PRODUCT";

const EDIT_PRODUCT = "EDIT_PRODUCT";

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

//THUNCTIONS

// export const fetchProduct = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(`/api/products/${product.id}`);
//       const data = response.data;
//       dispatch(getProduct(data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const editedProductThunk = (editedProduct, history) => {
  return async (dispatch) => {
    try {
      const { productId } = editedProduct;
      const response = await axios.put(`/api/products`, editedProduct);
      const data = response.data;
      dispatch(editProduct(data));
      history.push(`/products/${productId}`);
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      return action.product;
    }
    // case EDIT_PRODUCT:
    //   return {
    //     ...state,
    //    action.editedProduct,
    //   };
    default:
      return state;
  }
};
