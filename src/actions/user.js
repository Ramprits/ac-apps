export const SET_USER = "SET_USER";
export const USER_LOGOUT = "USER_LOGOUT";
export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const logout = () => ({
  type: USER_LOGOUT,
});
