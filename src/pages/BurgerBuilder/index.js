import React, { Component } from "react";
import Burger from "../../components/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <div>Орцны удирдлага</div>
      </div>
    );
  }
}

export default BurgerBuilder;
