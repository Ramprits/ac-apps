export const SET_USER = "SET_USER";
export const USER_ERROR = "USER_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const clearErrorMessage = () => ({
  type: CLEAR_ERROR,
});

export const loginError = (payload) => ({
  type: USER_ERROR,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const logout = () => ({
  type: USER_LOGOUT,
});
