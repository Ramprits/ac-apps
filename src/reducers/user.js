import {
  CLEAR_ERROR,
  SET_USER,
  USER_ERROR,
  USER_LOGOUT,
} from "../actions/user";

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

    case USER_ERROR:
      return { ...state, isLoading: false, currentUser: null, error: payload };

    case CLEAR_ERROR:
      return { ...state, isLoading: false, currentUser: null, error: "" };
    default:
      return state;
  }
};
