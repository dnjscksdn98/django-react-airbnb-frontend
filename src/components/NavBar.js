import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../modules/auth";

function NavBar() {
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <React.Fragment>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/profile">Profile</Link>
        </React.Fragment>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </React.Fragment>
  );
}

export default NavBar;
