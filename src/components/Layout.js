import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container mx-auto my-10">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
