import React from "react";
import { NavLink } from "react-router-dom";

import css from "./style.module.css";

const MenuItem = (props) => (
  <li className={css.MenuItem}>
    <NavLink
      // exact={props.exact}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? css.active : ""
      }
      to={props.link}
    >
      {props.children}
      {props.exact}
    </NavLink>

    {/* <a className={props.active ? css.active : null} href={props.link}>
      // {props.children}

    </a> */}
  </li>
);

export default MenuItem;
