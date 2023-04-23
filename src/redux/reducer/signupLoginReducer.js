const initialState = {
  email: "",
  password: "",
  saving: false,
  loginin: false,
  userId: null,
  token: null,
  firebaseResultData: null,
  firebaseError: null,
  firebaseErrorCode: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return { ...state, saving: true };
      break;

    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        firebaseError: null,
        userId: action.firebaseResultData.localId,
        token: action.firebaseResultData.idToken,
        firebaseResultData: action.firebaseResultData,
      };
      break;

    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error.response.data.error.message,
        firebaseErrorCode: action.error.response.data.error.code,
      };
      break;

    case "LOGIN_USER_START":
      return { ...state, loginin: true };
      break;

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loginin: false,
        userId: action.firebaseResultData.localId,
        token: action.firebaseResultData.idToken,
        firebaseResultData: action.firebaseResultData,
        firebaseError: null,
        firebaseErrorCode: null,
      };
      break;

    case "LOGIN_USER_ERROR":
      return {
        ...state,
        loginin: false,
        userId: null,
        firebaseError: action.error.response.data.error.message,
        firebaseErrorCode: action.error.response.data.error.code,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
