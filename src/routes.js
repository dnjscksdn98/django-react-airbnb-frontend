import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import SignupContainer from "./containers/SignupContainer";
import LoginContainer from "./containers/LoginContainer";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route
      render={() => (
        <React.Fragment>
          <h1>This page does not exist.</h1>
        </React.Fragment>
      )}
    />
  </Switch>
);

export default BaseRouter;
