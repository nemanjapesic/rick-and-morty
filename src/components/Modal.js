import React from "react";
import { GlobalContext } from "../context/GlobalState";

const Modal = () => {
  const { modal, setModal } = React.useContext(GlobalContext);

  const closeModal = (e) => {
    setModal(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 transition-opacity ease-linear"
      style={{
        display: modal.open ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, .6)",
      }}
      onClick={closeModal}
    >
      <div
        className="absolute"
        style={{
          minWidth: 300,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col p-4 pt-2 bg-white rounded">
          <div className="flex">
            <div
              className="ml-auto text-gray-500 cursor-pointer transform hover:scale-110 transition duration-200"
              onClick={closeModal}
            >
              <i className="fa fa-2x fa-close" aria-hidden="true"></i>
            </div>
          </div>
          <div className="flex flex-1 mt-2">
            {modal.content && <modal.content {...modal.props} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
