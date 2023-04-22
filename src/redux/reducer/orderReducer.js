const initialState = {
  //Load order
  orders: [],
  loading: false,
  firebaseError: null,

  //Save order
  newOrder: {
    saving: false,
    finished: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ORDERS_START":
      return { ...state, loading: true };
      break;

    case "LOAD_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.orders,
        firebaseError: null,
      };
      break;

    case "LOAD_ORDERS_ERROR":
      return { ...state, loading: false, firebaseError: action.error };
      break;

    case "SAVE_ORDER_START":
      return { ...state, newOrder: { ...state.newOrder, saving: true } };
      break;

    case "SAVE_ORDER_SUCCESS":
      return {
        ...state,
        newOrder: { ...state.newOrder, saving: false, error: null },
      };
      break;

    case "SAVE_ORDER_ERROR":
      return {
        ...state,
        newOrder: { ...state.newOrder, saving: false, error: action.error },
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
