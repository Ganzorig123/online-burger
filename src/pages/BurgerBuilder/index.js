import React, { Component } from "react";
import Burger from "../../components/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Burger />
        <div>Орцны удирдлага</div>
      </div>
    );
  }
}

export default BurgerBuilder;
