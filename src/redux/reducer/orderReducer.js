const initialState = {
  orders: [
    [
      "-NTPOMZQ8TqKIMZufRYe",
      {
        dun: 4400,
        hayag: {
          city: "Улаанбаатар хот",
          name: "Зоригтбаяр",
          street: "УБ ХУД 20-р хороо",
        },
        orts: { bacon: 0, cheese: 1, meat: 2, salad: 1 },
      },
    ],
  ],
  loading: false,
};

// const [orders, setOrders] = useState([]);
// const [loading, setLoading] = useState(false);

const reducer = (state = initialState, action) => {
  if (action.type === "LOAD_ORDERS") {
    return { ...state, loading: true };
  }
  return state;
};

export default reducer;
