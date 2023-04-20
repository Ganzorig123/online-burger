import React from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Outlet, useNavigate } from "react-router-dom";

const ShippingPage = (props) => {
  let navigate = useNavigate();
  const cancelOrder = () => {
    // console.log("GoBack");
    navigate(-1);
  };

  const showContactData = () => {
    navigate("/ship/contact", { replace: true });
  };

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "24px" }}>
        <strong>Таны захиалга амттай байх болно гэж найдаж байна...</strong>
      </p>
      <p style={{ fontSize: "24px" }}>
        <strong>Дүн : {props.price}</strong>
      </p>
      <Burger />
      <Button
        daragdsan={cancelOrder}
        btnType="Danger"
        text="ЗАХИАЛГЫГ ЦУЦЛАХ"
      />
      <Button
        daragdsan={showContactData}
        btnType="Success"
        text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
      />
      <Outlet />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
