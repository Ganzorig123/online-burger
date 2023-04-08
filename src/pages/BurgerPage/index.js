import React, { Component } from "react";
// import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Spinner from "../../components/General/Spinner";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import * as actions from "../../redux/action/burgerActions";
import axios from "../../axios-orders";

// let history = useHistory();

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        const arr = Object.entries(response.data).reverse();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  continueOrder = () => {
    // const order = {
    //   orts: this.props.burgeriinOrts,
    //   dun: this.props.niitUne,
    //   hayag: {
    //     name: "Энхтөр",
    //     city: "UB",
    //     street: "10-r horoolol 23-12",
    //   },
    // };

    // axios
    //   .post("orders.json", order)
    //   .then((response) => {})
    //   .finally(() => {});

    // this.setState({
    //   ingredients: {
    //     salad: 0,
    //     bacon: 0,
    //     cheese: 0,
    //     meat: 0,
    //   },
    // });
    console.log(this.props);

    const params = [];
    for (let orts in this.props.burgeriinOrts) {
      params.push(orts + "=" + this.props.burgeriinOrts[orts]);
    }

    const query = params.join("&");
    console.log(query);
    // history.push("/ship");

    this.closeConfirmModal();
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    const disabledIngredients = { ...this.props.burgeriinOrts };

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
            price={this.props.niitUne}
            ingredientsNames={this.props.ingredientsNames}
            ingredients={this.props.burgeriinOrts}
          />
        </Modal>
        <Burger orts={this.props.burgeriinOrts} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={this.props.ingredientsNames}
          disabled={!this.props.purchasing}
          price={this.props.niitUne}
          disabledIngredients={disabledIngredients}
          ortsHasah={this.props.burgereesOrtsHas}
          ortsNemeh={this.props.burgertOrtsNem}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.ingredients,
    niitUne: state.totalPrice,
    purchasing: state.purchasing,
    ingredientsNames: state.ingredientsNames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    burgertOrtsNem: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    burgereesOrtsHas: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BurgerPage);
