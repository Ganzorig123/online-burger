import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginActions";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.logout();
    navigate("/");
  }, []);
  return <div></div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
