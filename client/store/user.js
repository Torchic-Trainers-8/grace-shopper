import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (user) => {
  return {
    type: GET_USER,
    user,
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      dispatch(getUser(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}
