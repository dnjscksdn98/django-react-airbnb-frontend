import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import NavBar from "./components/NavBar";

function App() {
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
