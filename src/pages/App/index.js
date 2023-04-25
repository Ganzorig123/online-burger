import React, { useState, useEffect, Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import css from "./style.module.css";
import * as actions from "../../redux/action/loginActions";

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
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      //Hugatsaa ni duusaagui token baina, Login hiine
      if (expireDate > new Date()) {
        props.autoLogin(token, userId);
        //Token huchingui bolohod uldej baigaa hugatsaag tootsoolj
        //Ter uldej baigaa hugatsaanii daraa automataar Logout hiine
        props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        // Tokenii hugatsaa ni duussan baina.
        props.logout();
      }
    }
  }, []);
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
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(actions.logout()),
    autoLogoutAfterMillisec: () => dispatch(actions.autoLogoutAfterMillisec()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
