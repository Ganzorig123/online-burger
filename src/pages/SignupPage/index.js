import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/action/signupActions";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Button from "../../components/General/Button";

const SignupPage = (props) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword1 = (e) => {
    setPassword1(e.target.value);
  };

  const changePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const signup = () => {
    if (password1 === password2) {
      props.signupUser(email, password1);
    } else {
      setError("Нууц үгнүүд хоорондоо таарахгүй байна!");
    }
  };

  return (
    <div className={css.SignupPage}>
      {props.userId && navigate("/")}
      <h1>Бүртгэлийн форм</h1>
      <div>Та өөрийн мэдээлэлээ оруулна уу!</div>
      <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
      <input
        onChange={changePassword1}
        type="password"
        placeholder="Нууц үгээ оруулна уу"
      />
      <input
        onChange={changePassword2}
        type="password"
        placeholder="Нууц үгээ давтан оруулна уу"
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError}</div>
      )}

      {props.saving && <Spinner />}
      <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan={signup} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.signupLoginReducer.saving,
    firebaseError: state.signupLoginReducer.firebaseError,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
