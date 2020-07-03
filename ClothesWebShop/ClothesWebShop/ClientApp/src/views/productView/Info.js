import React from "react";

export const Info = (props) => {
  return (
    <div className="info">
      <h1>{props.product.name}</h1>
      <p>Short description: {props.product.description}</p>
      <p>Available in size: {props.product.size}</p>
      <p>Price: {props.product.price} $</p>
      <p>Brand: {props.product.brand.name}</p>
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
      <div className="product-view__buttons-div">
        {props.isAdmin ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="product-view__buttons-div__button"
              onClick={props.updateProduct}
            >
              Update Product
            </button>
            <button
              className="product-view__buttons-div__button"
              onClick={props.deleteProduct}
            >
              Delete Product
            </button>
          </div>
        ) : (
          <div>
            <button
              className="product-view__buttons-div__button"
              onClick={props.addToCart}
            >
              Add To Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
