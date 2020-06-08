import React from "react";

const Order = (props) => {
  return (
    <div className="order">
      <div className="order-image-div">
        <img src={require("../../images/shirt.jpg")} alt="Article mini" />
      </div>
      <div className="order-description">
        <span>{props.article.name}</span>
        <div className="order-description__second-row">
          <span>Color:{props.article.color}</span>
          <span>Size:{props.article.size}</span>
          <div>
            <span className="prettyMinusPlus">&#8722;</span>
            <span>{props.article.amount}</span>
            <span className="prettyMinusPlus">&#43;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
