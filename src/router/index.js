import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Router;
