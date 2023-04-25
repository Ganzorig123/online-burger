import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import * as loginActions from "../../redux/action/loginActions";
import Button from "../../components/General/Button";
import css from "./style.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    props.login(email, password);
  };

  return (
    <div className={css.Login}>
      {/* {props.userId && navigate("/orders") } */}
      {props.userId && <Navigate to="/orders" />}

      <input onChange={changeEmail} type="text" placeholder="И-мэйл хаяг" />
      <input onChange={changePassword} type="password" placeholder="Нууц үг" />
      {props.firebaseError && (
        <div style={{ color: "red" }}>
          {props.firebaseError} код нь : {props.firebaseErrorCode}
        </div>
      )}
      <Button text="Нэвтрэх" btnType="Success" daragdsan={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
    loginin: state.signupLoginReducer.loginin,
    firebaseError: state.signupLoginReducer.firebaseError,
    firebaseErrorCode: state.signupLoginReducer.firebaseErrorCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) =>
      dispatch(loginActions.loginUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
