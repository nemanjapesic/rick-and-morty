import React from "react";
import "./tailwind.css";
import { GlobalProvider } from "./context/GlobalState";
import Router from "./router";
import Modal from "./components/Modal";

const App = () => {
  return (
    <GlobalProvider>
      <Router />
      <Modal />
    </GlobalProvider>
  );
};

export default App;
