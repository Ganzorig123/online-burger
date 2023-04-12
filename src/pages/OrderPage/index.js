import React, { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import css from "./style.module.css";

const OrderPage = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/orders.json")
      .then((response) => {
        const arr = Object.entries(response.data).reverse();
        setOrders(arr);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        orders.map((el) => <Order key={el[0]} order={el[1]} />)
      )}
    </div>
  );
};

export default OrderPage;
