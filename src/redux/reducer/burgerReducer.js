const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 1000,
  purchasing: false,
  ingredientsNames: {
    salad: "Салад",
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
  },
};

const INGREDIENT_PRICES = { salad: 150, bacon: 800, cheese: 250, meat: 1500 };

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    const newPrice = state.totalPrice - INGREDIENT_PRICES[action.ortsNer];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 1000,
    };
  }
  return state;
};

export default reducer;
