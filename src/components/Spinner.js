import React from "react";

const Spinner = () => {
  return (
    <React.Fragment>
      <style
        children={`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }`}
      />
      <div
        className="rounded-full w-24 h-24 border-8"
        style={{
          borderTop: "8px solid #4299E1",
          animation: "spin 2s linear infinite",
        }}
      ></div>
    </React.Fragment>
  );
};

export default Spinner;
