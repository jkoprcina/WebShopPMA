import React from "react";

const OrderReview = (props) => {
  return (
    <div className="main">
      <b>
        <span>
          {props.user.firstName}, {props.address.contactNumber}
        </span>
      </b>
      <span>
        {props.address.name} {props.address.number}
      </span>
      <span>{props.user.lastName}</span>
      <span>
        {props.address.city},{props.address.country},{props.address.postalCode}{" "}
        {props.address.city}
      </span>
    </div>
  );
};
export default OrderReview;
