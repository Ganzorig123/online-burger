import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import { connect } from "react-redux";
import css from "./style.module.css";

const Burger = (props) => {
  //{bacon: 2, cheese: 2, meat: 1, salad: 1}
  const items = Object.entries(props.ingredients);

  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i + 1}`} type={el[0]} />);
    return null;
  });

  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу...</p>;
  console.log(props);
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
  };
};

export default connect(mapStateToProps)(Burger);
