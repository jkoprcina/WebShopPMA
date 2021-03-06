import React from "react";

export const ConfirmationPopUp = (props) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__inner__text">
          <p>Your items have been bought and will soon be shipped!</p>
        </div>
        <div className="popup__inner__button-div">
          <button
            className="popup__inner__button-div__button-full"
            onClick={() => props.goToMainPage()}
          >
            Go back to shopping
          </button>
        </div>
      </div>
    </div>
  );
};
