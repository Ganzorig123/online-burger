import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import css from "./style.module.css";
import Button from "../General/Button";

import axios from "../../axios-orders";
import Spinner from "../General/Spinner";

const ContactData = (props) => {
  const [name, setName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(null);

  let navigate = useNavigate();

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
    const order = {
      orts: props.ingredients,
      dun: props.price,
      hayag: {
        name,
        city,
        street,
      },
    };

    setLoading(true);

    axios
      .post("orders.json", order)
      .then((response) => {
        console.log("Order amjilttai");
      })
      .finally(() => {
        setLoading(false);
        navigate("/orders");
      });
  };

  return (
    <div className={css.ContactData}>
      {loading ? (
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
  };
};

export default connect(mapStateToProps)(ContactData);
