import React from "react";
import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  const content = Object.keys(props.ingredientsNames).map((el) => (
    <BuildControl
      key={el}
      type={el}
      orts={props.ingredientsNames[el]}
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
      <button
        onClick={props.showConfirmModal}
        className={css.OrderButton}
        disabled={props.totalPrice <= 1000}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
