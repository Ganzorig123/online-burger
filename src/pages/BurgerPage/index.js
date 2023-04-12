import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Spinner from "../../components/General/Spinner";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

import axios from "../../axios-orders";

const BurgerPage = (props) => {
  let navigate = useNavigate();
  console.log("--------------");
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/orders.json")
      .then((response) => {
        const arr = Object.entries(response.data).reverse();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const continueOrder = () => {
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

    navigate("/ship");
    console.log("props =>", props);
    closeConfirmModal();
  };

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        {loading ? (
          <Spinner />
        ) : (
          <OrderSummary
            onCancel={closeConfirmModal}
            onContinue={continueOrder}
          />
        )}
      </Modal>

      <Burger />
      <BuildControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerPage;
