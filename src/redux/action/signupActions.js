import axios from "axios";

// Sign up
export const signupUser = (email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKWLV-6eeT4eDxyCevHLgAWzfowjlrGcY",
        data
      )
      .then((result) => {
        dispatch(signupUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(signupUserError(error));
      });
  };
};

export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};

export const signupUserSuccess = (firebaseResultData) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    firebaseResultData,
  };
};

export const signupUserError = (error) => {
  return {
    type: "SIGNUP_USER_ERROR",
    error,
  };
};
