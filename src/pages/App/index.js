import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";

import css from "./style.module.css";

class App extends Component() {
  state = {
    showSidebar: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <div className={css.Content}>
          <BurgerPage />
        </div>
      </div>
    );
  }
}

export default App;
