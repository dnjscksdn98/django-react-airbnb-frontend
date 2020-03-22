import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../modules/auth";
import Login from "../components/Login";

function LoginContainer() {
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const { username, password } = formData;

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <Login
      username={username}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default LoginContainer;
