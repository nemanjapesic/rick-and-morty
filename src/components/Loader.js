import React from "react";

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
        <style
          children={`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }`}
        />
        <div
          className="rounded-full w-24 h-24 border-t-8 border-blue-500"
          style={{
            animation: "spin 2s linear infinite",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
