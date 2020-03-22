import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import NavBar from "./components/NavBar";
import { checkState } from "./modules/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkState());
  });

  return (
    <Router>
      <header>
        <NavBar />
      </header>

      <BaseRouter />
    </Router>
  );
}

export default App;
