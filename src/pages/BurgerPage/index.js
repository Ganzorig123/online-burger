import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

const INGREDIENTS_PRICE = { salad: 150, bacon: 800, cheese: 250, meat: 1500 };

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },

    totalPrice: 1000,
  };

  ortsNemeh = (type) => {
    if (this.state.ingredients[type] < 10) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]++;
      const newTotalPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];

      this.setState({ ingredients: newIngredients, totalPrice: newTotalPrice });
    }
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      const newTotalPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];

      this.setState({ ingredients: newIngredients, totalPrice: newTotalPrice });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
          disabledIngredients={disabledIngredients}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
