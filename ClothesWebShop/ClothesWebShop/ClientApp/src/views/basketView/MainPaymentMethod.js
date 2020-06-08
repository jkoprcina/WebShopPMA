import React from "react";

const MainPaymentMethod = (props) => {
  return (
    <div className="main">
      <span>{props.paymentMethod.holderName}</span>
      <span>{props.paymentMethod.name}</span>
      <span>{props.paymentMethod.number}</span>
    </div>
  );
};
export default MainPaymentMethod;
