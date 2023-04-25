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
  const [confirmOrder, setConfirmOrder] = useState(false);
  const [loading, setLoading] = useState(false);

  const continueOrder = () => {
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
