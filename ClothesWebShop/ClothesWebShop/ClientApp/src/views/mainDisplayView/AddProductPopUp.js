import React from "react";

export class AddProductPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      color: "",
      amountAvailable: "0",
      description: "",
    };
  }

  handleUpdateNameValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleUpdatePriceValue = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  handleUpdateDescriptionValue = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleUpdateColorValue = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  handleUpdateAmountAvailableValue = (e) => {
    this.setState({
      amountAvailable: e.target.value,
    });
  };

  handleCreateNewProductAndCallAddProduct = () => {
    const { name, price, color, amountAvailable, description } = this.state;
    let product = { name, price, color, amountAvailable, description };
    this.props.addProduct(product);
  };

  render() {
    const { name, price, color, amountAvailable, description } = this.state;
    return (
      <div className="popup">
        <div className="popup__inner">
          <div className="popup__inner__div">
            <div className="popup__inner__div__label-div">
              <label>Name:</label>
              <label>Price:</label>
              <label>Color:</label>
              <label>Description:</label>
              <label>Amount Available:</label>
            </div>
            <div className="popup__inner__div__input-div">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => this.handleUpdateNameValue(e)}
              />
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => this.handleUpdatePriceValue(e)}
              />
              <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => this.handleUpdateColorValue(e)}
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => this.handleUpdateDescriptionValue(e)}
              />
              <input
                type="number"
                placeholder="Amount Available"
                value={amountAvailable}
                onChange={(e) => this.handleUpdateAmountAvailableValue(e)}
              />
            </div>
          </div>
          <p className="popup__inner__error-message">
            {this.props.productError}
          </p>
          <div className="popup__inner__button-div">
            <button
              className="popup__inner__button-div__button-full"
              onClick={this.handleCreateNewProductAndCallAddProduct}
            >
              Add Product
            </button>
            <button
              className="popup__inner__button-div__button-empty"
              onClick={this.props.exit}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
