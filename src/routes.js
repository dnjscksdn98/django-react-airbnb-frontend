import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import HomeContainer from "./containers/HomeContainer";
import SignupContainer from "./containers/SignupContainer";
import LoginContainer from "./containers/LoginContainer";
import ProfileContainer from "./containers/ProfileContainer";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
    <PrivateRoute path="/profile" component={ProfileContainer} />
    <Route path="*" component={() => "404 NOT FOUND"} />
  </Switch>
);

export default BaseRouter;
