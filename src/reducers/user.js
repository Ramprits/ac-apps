import { SET_USER } from "../actions/user";

const initialState = {
  currentUser: null,
  isLoading: true,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, isLoading: false, currentUser: payload };

    default:
      return state;
  }
};
