import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Signup from "../components/Signup";
import { signup } from "../modules/auth";

function SignupContainer() {
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  const {
    username,
    first_name,
    last_name,
    email,
    password,
    confirm_password
  } = formData;

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      signup(username, first_name, last_name, email, password, confirm_password)
    );
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <Signup
      username={username}
      first_name={first_name}
      last_name={last_name}
      email={email}
      password={password}
      confirm_password={confirm_password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignupContainer;
