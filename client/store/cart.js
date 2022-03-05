import axios from "axios";

const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const addToCartThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(addToCartThunk(data));
    } catch (error) {
      console.error("Problem adding to cart");
    }
  };
};

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.state) {
    case ADD_TO_CART:
      const product = action.payload;
      const existItem = state.cartItems.find(
        (x) => x.productId === product.productId
      );
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x) => x.productId === existItem.productId),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, product],
        };
      }
    default:
      return state;
  }
};

// payload:{
// productId: data.product.id,
// title: data.product.title,
// description: data.product.description,
// price: data.product.price,
// quantity: data.product.quantity,
// image: data.product.image,
// weight: data.product.weight,
// color: data.product.color
