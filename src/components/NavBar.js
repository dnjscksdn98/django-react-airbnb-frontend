import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkState } from "../modules/auth";

function NavBar() {
  const { isAuthenticated } = useSelector(state => state.auth.token !== null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkState());
  }, [dispatch]);

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <React.Fragment>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </React.Fragment>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </React.Fragment>
  );
}

export default NavBar;
