import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/action/orderActions";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
// import css from "./style.module.css";

const OrderPage = (props) => {
  useEffect(() => {
    props.loadOrders();
  }, []);

  return (
    <div>
      {props.loading ? (
        <Spinner />
      ) : (
        props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => dispatch(actions.loadOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
