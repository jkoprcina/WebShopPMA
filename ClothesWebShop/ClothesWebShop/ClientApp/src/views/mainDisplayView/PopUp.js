import React from "react";

export const PopUp = (props) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="login-register-view__login">
          <section>
            <h2>Welcome Back</h2>
            <input
              type="text"
              placeholder="Name"
              value={props.name}
              onChange={(e) => props.updateNameValue(e)}
            />
            <input
              type="text"
              placeholder="Price"
              value={props.price}
              onChange={(e) => props.updatePriceValue(e)}
            />
            <input
              type="text"
              placeholder="Color"
              value={props.color}
              onChange={(e) => props.updateColorValue(e)}
            />
            <input
              type="text"
              placeholder="Description"
              value={props.description}
              onChange={(e) => props.updateDescriptionValue(e)}
            />
            <input
              type="number"
              placeholder="Amount Available"
              value={props.amountAvailable}
              onChange={(e) => props.updateAmountAvailableValue(e)}
            />
            <p className="login-register-view__error-message">
              {props.addProductError}
            </p>
            <button onClick={props.addProduct}>Add Product</button>
            <button onClick={props.togglePopUp}>Exit</button>
          </section>
        </div>
      </div>
    </div>
  );
};
