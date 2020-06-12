import React from "react";

export const PopUp = (props) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__inner__text">
          <p>
            You have just added {props.amountSelected}
            {"  "} {props.article.color}
            {"  "}
            <span className="popup__inner__text__name">
              {props.article.name}
            </span>
            {"  "} to your basket
          </p>
        </div>
        <div className="popup__inner__button-div">
          <button
            className="popup__inner__button-div__button-basket"
            onClick={() => props.goToBasket()}
          >
            Go to basket
          </button>
          <button
            className="popup__inner__button-div__button-stay"
            onClick={() => props.stayOnArticle()}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
