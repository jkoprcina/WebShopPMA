import React from "react";

const ImageDisplay = (props) => {
  return (
    <div className="image-display">
      <img src={require("../../images/shirt.jpg")} alt="Man in Shirt" />
    </div>
  );
};
export default ImageDisplay;
