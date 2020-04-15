import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
