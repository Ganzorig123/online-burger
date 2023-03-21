import React from "react";
import css from "./style.module.css";

const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.orts}</div>
    <button
      className={css.Less}
      disabled={props.disabled[props.type]}
      onClick={() => props.ortsHasah(props.type)}
    >
      Хасах
    </button>
    <button className={css.More} onClick={() => props.ortsNemeh(props.type)}>
      Нэмэх
    </button>
  </div>
);

export default BuildControl;
