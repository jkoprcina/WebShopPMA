import React from "react";

export const PopUp = (props) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__inner__text">
          <p>Your items have been paid and shipped!</p>
        </div>
        <div className="popup__inner__button-div">
          <button
            className="popup__inner__button-div__button-basket"
            onClick={() => props.goToMainPage()}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
