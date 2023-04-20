import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/action/burgerActions";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.price}</strong>
      </p>

      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
    ingredientsNames: state.burgerReducer.ingredientsNames,
    purchasing: state.burgerReducer.purchasing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ortsNemeh: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
