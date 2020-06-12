import React from "react";

export const OrderTotal = (props) => {
  return (
    <div className="order-total">
      <div className="order-total__price">
        <span>Total</span>
        <span className="order-total__price__amount">
          US ${props.totalPrice}
        </span>
      </div>
      <button onClick={() => props.buy()}>Buy</button>
    </div>
  );
};
