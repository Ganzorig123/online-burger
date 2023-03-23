import css from "./style.module.css";
import React from "react";

const MenuItem = (props) => (
  <li className={css.MenuItem}>
    <a className={props.active ? css.active : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default MenuItem;
