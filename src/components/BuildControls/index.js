import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  const controls = {
    salad: "Салад",
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
  };

  const content = Object.keys(controls).map((el) => (
    <BuildControl
      key={el}
      type={el}
      orts={controls[el]}
      ortsNemeh={props.ortsNemeh}
      ortsHasah={props.ortsHasah}
      disabled={props.disabledIngredients}
    />
  ));

  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.totalPrice}</strong>
      </p>
      {content}
      <button className={css.OrderButton} disabled={props.totalPrice <= 1000}>
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
