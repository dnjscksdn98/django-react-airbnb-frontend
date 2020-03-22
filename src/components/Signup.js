import React from "react";
import { Link, Redirect } from "react-router-dom";

function Signup(props) {
  const {
    username,
    first_name,
    last_name,
    email,
    password,
    confirm_password,
    handleChange,
    handleSubmit
  } = props;

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          name="first_name"
          value={first_name}
          placeholder="First name"
          onChange={handleChange}
        />
        <input
          name="last_name"
          value={last_name}
          placeholder="Last name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email address"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirm_password"
          value={confirm_password}
          placeholder="Confirm password"
          onChange={handleChange}
        />
        <button type="submit">sign up</button>
      </form>
      <p>You already have an account?</p>
      <Link to="/login">login</Link>
    </React.Fragment>
  );
}

export default Signup;
