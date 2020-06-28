import React from "react";

export const UserProfilePopUp = (props) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__inner__text">
          <h3>
            {props.user.firstName} {props.user.lastName}
          </h3>
          <span>Username: {props.user.username}</span>
          <span>Email: {props.user.email}</span>
        </div>
        <div className="popup__inner__button-div">
          <button
            className="popup__inner__button-div__button-shop"
            onClick={() => props.toggle()}
          >
            Continue Shopping
          </button>
          <button
            className="popup__inner__button-div__button-log-out"
            onClick={() => props.logOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};
