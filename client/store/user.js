export const GET_USER = "GET_USER";

export const getProducts = (user) => {
  return {
    type: GET_USER,
    user,
  };
};

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}
