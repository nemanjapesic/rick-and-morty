import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <HashRouter basename="/">
      <Layout>
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
      </Layout>
    </HashRouter>
  );
};

export default Router;
