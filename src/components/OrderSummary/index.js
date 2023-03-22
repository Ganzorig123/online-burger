import React from "react";
import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientsNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн: {props.totalPrice}₮</strong>
      </p>
      <p>Цаашаа үргэлжлүүлэх үү?</p>
      <Button
        daragdsan={props.onCancel}
        ButtonType="Success"
        text="ТАТГАЛЗАХ"
      />
      <Button
        daragdsan={props.onContinue}
        ButtonType="Danger"
        text="ҮРГЭЛЖЛҮҮЛЭХ"
      />
    </div>
  );
};

export default OrderSummary;
