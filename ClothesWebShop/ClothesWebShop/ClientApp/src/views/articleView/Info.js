import React from "react";

export const Info = (props) => {
  return (
    <div className="info">
      <h1>{props.article.name}</h1>
      <p>Short description: {props.article.description}</p>
      <p>Price: {props.article.price} $</p>
      <p>Ammount available: {props.article.amountAvailable}</p>
      <div>
        <span className="prettyMinus" onClick={props.lowerAmountSelectedByOne}>
          &#8722;
        </span>
        <span>{props.amountSelected}</span>
        <span className="prettyPlus" onClick={props.raiseAmountSelectedByOne}>
          &#43;
        </span>
      </div>
      <button className="article-view__button" onClick={props.addToBasket}>
        Add To Basket
      </button>
    </div>
  );
};
