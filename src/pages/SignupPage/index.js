import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Button from "../../components/General/Button";

const SignupPage = () => {
  const [email, setEmail] = useState[""];
  const [password1, setPassword1] = useState[""];
  const [password2, setPassword2] = useState[""];
  const [error, setError] = useState[""];

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
      signupUser(email, password1);
    } else {
      setError("Нууц үгнүүд хоорондоо таарахгүй байна!");
    }
  };

  return (
    <div className={css.SignupPage}>
      {props.userId && <Redirect to="/" />}
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
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (state) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);