import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const { username, password, handleChange, handleSubmit } = props;

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
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">login</button>
      </form>
      <p>You don't have an account?</p>
      <Link to="/signup">signup</Link>
    </React.Fragment>
  );
}

export default Login;
