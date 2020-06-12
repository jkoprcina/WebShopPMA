import React from "react";

export const Basket = (props) => {
  return (
    <div className="basket">
      <div className="order-image-div">
        <img src={require("../../images/shirt.jpg")} alt="Article mini" />
      </div>
      <div className="order-description">
        <span>{props.basket.article.name}</span>
        <div className="order-description__second-row">
          <span className="margin-right">
            Color:{props.basket.article.color}
          </span>
          <span className="margin-right">Size:{props.basket.article.size}</span>
          <div className="order-description__second-row__right">
            <span
              className="prettyMinus"
              onClick={() => props.lowerAmountSelectedByOne(props.basket)}
            >
              &#8722;
            </span>
            <span>{props.basket.amountSelected}</span>
            <span
              className="prettyPlus"
              onClick={() => props.raiseAmountSelectedByOne(props.basket)}
            >
              &#43;
            </span>
          </div>
        </div>
        <button onClick={() => props.removeFromBasket(props.basket.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};
