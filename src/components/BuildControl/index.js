import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";

const BuildControl = (props) => {
  const disabledIngredients = { ...props.ingredients };

  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}</div>
      <button
        disabled={disabledIngredients[props.type]}
        onClick={() => props.ortsHasah(props.type)}
        className={css.Less}
      >
        Хасах
      </button>
      <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
        Нэмэх
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
  };
};

export default connect(mapStateToProps)(BuildControl);
