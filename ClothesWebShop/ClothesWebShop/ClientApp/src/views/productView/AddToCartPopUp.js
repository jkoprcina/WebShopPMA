import React from "react";

export const AddToCartPopUp = (props) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__inner__text">
          <p>
            You have just added {props.amountSelected}
            {"  "} {props.product.color}
            {"  "}
            <span className="popup__inner__text__name">
              {props.product.name}
            </span>
            {"  "} to your cart
          </p>
        </div>
        <div className="popup__inner__button-div">
          <button
            className="popup__inner__button-div__button-basket"
            onClick={() => props.goToCart()}
          >
            Go to Cart
          </button>
          <button
            className="popup__inner__button-div__button-stay"
            onClick={() => props.stayOnProduct()}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
