import React from "react";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";

import css from "./style.module.css";

function App() {
  return (
    <div>
      <Toolbar />
      <div className={css.Content}>
        <BurgerPage />
      </div>
    </div>
  );
}

export default App;
