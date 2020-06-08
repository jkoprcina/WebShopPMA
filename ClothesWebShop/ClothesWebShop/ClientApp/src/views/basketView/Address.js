import React from "react";

const Address = (props) => {
  return (
    <div className="address">
      {props.address.name} {props.address.number}, {props.address.city}{" "}
      {props.address.country}
    </div>
  );
};
export default Address;
