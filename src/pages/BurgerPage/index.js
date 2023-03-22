import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENTS_PRICE = { salad: 150, bacon: 800, cheese: 250, meat: 1500 };

const INGREDIENTS_NAMES = {
  salad: "Салад",
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
};

class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },

    totalPrice: 1000,
    confirmOrder: false,
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  continueOrder = () => {
    console.log("Continue Daragdlaa...");
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
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          <OrderSummary
            onCancel={this.closeConfirmModal}
            onContinue={this.continueOrder}
            totalPrice={this.state.totalPrice}
            ingredientsNames={INGREDIENTS_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENTS_NAMES}
          totalPrice={this.state.totalPrice}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
          disabledIngredients={disabledIngredients}
        />
      </div>
    );
  }
}

export default BurgerPage;
