import React from "react";
import "./tailwind.css";
import { GlobalProvider } from "./context/GlobalState";
import Router from "./router";

const App = () => {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
};

export default App;
