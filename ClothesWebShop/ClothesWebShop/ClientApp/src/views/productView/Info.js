import React from "react";

export const Info = (props) => {
  return (
    <div className="info">
      <h1>{props.product.name}</h1>
      <p>Short description: {props.product.description}</p>
      <p>Price: {props.product.price} $</p>
      <p>Ammount available: {props.product.amountAvailable}</p>
      <div>
        <span className="prettyMinus" onClick={props.lowerAmountSelectedByOne}>
          &#8722;
        </span>
        <span>{props.amountSelected}</span>
        <span className="prettyPlus" onClick={props.raiseAmountSelectedByOne}>
          &#43;
        </span>
      </div>
      <button className="article-view__button" onClick={props.addToCart}>
        Add To Cart
      </button>
      <button onClick={props.deleteProduct}>Delete Product</button>
    </div>
  );
};
