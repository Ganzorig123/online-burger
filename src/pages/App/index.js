import React from "react";
import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../../pages/BurgerBuilder";

import css from "./style.module.css";

function App() {
  return (
    <div>
      <Toolbar />
      <div className={css.Content}>
        <BurgerBuilder />
      </div>
    </div>
  );
}

export default App;
