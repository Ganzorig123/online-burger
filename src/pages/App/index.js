import React, { useState, Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import OrderPage from "../OrderPage";
import SideBar from "../../components/SideBar";
import ShippingPage from "../ShippingPage";
import ContactData from "../../components/ContactData";
import Logout from "../../components/Logout";

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  // const navigate = useNavigate();

  const toggleSideBar = () => {
    setShowSidebar((prevState) => !prevState.showSidebar);
  };

  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <main className={css.Content}>
        UserID : {props.userId}
        <Routes>
          {props.userId ? (
            <Fragment>
              <Route path="/" element={<BurgerPage />} />
              <Route path="logout" element={<Logout />} />
              <Route path="orders" element={<OrderPage />} />
              <Route path="ship" element={<ShippingPage />}>
                <Route path="contact" element={<ContactData />} />
              </Route>
            </Fragment>
          ) : (
            <Fragment>
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Fragment>
          )}
        </Routes>
        {/* <Routes>
          <Route path="/" element={<BurgerPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<Logout />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="orders" element={<OrderPage />} />
          <Route path="ship" element={<ShippingPage />}>
            <Route path="contact" element={<ContactData />} />
          </Route>
        </Routes> */}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps)(App);
