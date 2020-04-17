import React from "react";
import Spinner from "./Spinner";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 z-50 transition-opacity ease-linear"
      style={{ backgroundColor: "rgba(0, 0, 0, .6)" }}
    >
      <div
        className="absolute"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <Spinner />
      </div>
    </div>
  );
};

export default Loader;
