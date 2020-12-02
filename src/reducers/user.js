import { SET_USER, USER_LOGOUT } from "../actions/user";

const initialState = {
  currentUser: null,
  isLoading: true,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, isLoading: false, currentUser: payload };

    case USER_LOGOUT:
      return { ...state, isLoading: false, currentUser: null };

    default:
      return state;
  }
};
