import React, { Component } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class ShippingPage extends Component {
  state = {
    ingredients: {
      salad: 3,
      bacon: 0,
      cheese: 2,
      meat: 1,
    },
    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false,
  };

  goBack = () => {
    console.log("GoBack");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <Burger orts={this.state.ingredients} />
        <Button
          daragdsan={this.goBack}
          btnType="Danger"
          text="Захиалгыг цуцлах"
        />
      </div>
    );
  }
}

export default ShippingPage;
