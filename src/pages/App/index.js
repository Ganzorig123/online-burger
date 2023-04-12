import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import OrderPage from "../OrderPage";
import SideBar from "../../components/SideBar";
import ShippingPage from "../ShippingPage";

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
          <Route path="/orders" Component={OrderPage} />
          <Route path="/ship" Component={ShippingPage} />
          <Route path="/" Component={BurgerPage} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
