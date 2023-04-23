import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import css from "./style.module.css";
import Button from "../General/Button";
import * as orderActions from "../../redux/action/orderActions";
import Spinner from "../General/Spinner";

const ContactData = (props) => {
  const [name, setName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);

  const navigate = useNavigate();

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const saveOrder = () => {
    const newOrder = {
      orts: props.ingredients,
      dun: props.price,
      hayag: {
        name,
        city,
        street,
      },
    };

    props.saveOrderAction(newOrder);
  };

  useEffect(() => {
    // alert("Update");
    if (!props.newOrderStatus.saving && !props.newOrderStatus.error) {
      navigate("/orders");
    }
  });

  return (
    <div className={css.ContactData}>
      Дүн : {props.price}₮
      <div>
        {props.newOrderStatus.error &&
          `Захиалгыг хадгалах явцад алдаа гарлаа : ${props.newOrderStatus.error}`}
      </div>
      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            placeholder="Таны гэрийн хаяг"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            placeholder="Таны хот"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={saveOrder} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(orderActions.saveOrder(newOrder)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
