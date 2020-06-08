import React from "react";

const PaymentMethod = (props) => {
  return (
    <div className="payment-method">
      {props.paymentMethod.name}
      {props.paymentMethod.number}
    </div>
  );
};

export default PaymentMethod;
