import React from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";
import css from "./style.module.css";
import { Route, Routes } from "react-router-dom";

const ShippingPage = (props) => {
  const cancelOrder = () => {
    console.log("GoBack");
    // props.history.goBack();
  };

  const showContactData = () => {
    props.history.replace("/ship/contact");
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
      <Routes>
        <Route path="/ship/contact" Component={"ContactData"}></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
