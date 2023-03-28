import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import OrderPage from "../OrderPage";
import SideBar from "../../components/SideBar";

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          <Routes>
            <Route path="/orders" Component={OrderPage} />
            <Route path="/" Component={BurgerPage} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
