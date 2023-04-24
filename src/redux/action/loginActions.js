import axios from "axios";

// Login
export const loginUser = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKWLV-6eeT4eDxyCevHLgAWzfowjlrGcY",
        data
      )
      .then((result) => {
        dispatch(loginUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(loginUserError(error));
      });
  };
};

export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START",
  };
};

export const loginUserSuccess = (firebaseResultData) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    firebaseResultData,
  };
};

export const loginUserError = (error) => {
  return {
    type: "LOGIN_USER_ERROR",
    error,
  };
};

// Login
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
