import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import OrderPage from "../OrderPage";
import SideBar from "../../components/SideBar";
import ShippingPage from "../ShippingPage";
import ContactData from "../../components/ContactData";

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar((prevState) => !prevState.showSidebar);
  };

  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        <Routes>
          <Route path="/" element={<BurgerPage />} />
          <Route path="orders" element={<OrderPage />} />
          <Route path="ship" element={<ShippingPage />}>
            <Route path="contact" element={<ContactData />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
