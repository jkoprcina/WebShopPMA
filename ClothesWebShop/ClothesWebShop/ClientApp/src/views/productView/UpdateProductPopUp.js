import React from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { SIZES } from "../../constants";

export class UpdateProductPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      color: props.product.color,
      amountAvailable: props.product.amountAvailable,
      description: props.product.description,
      size: props.product.size,
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

  handleUpdateSizeValue = (e) => {
    console.log(e);
    this.setState({
      size: e.target.value,
    });
  };

  handleCreateNewProductAndCallUpdateProduce = () => {
    const { id, name, price, color, amountAvailable, description } = this.state;
    let product = { id, name, price, color, amountAvailable, description };
    this.props.updateProduct(product);
  };

  render() {
    const {
      name,
      price,
      color,
      amountAvailable,
      description,
      size,
    } = this.state;
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
              <label>Size</label>
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
              <div className="container">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-6">
                    <Select
                      value={size}
                      options={SIZES}
                      onChange={(e) => this.handleUpdateSizeValue(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="login-register-view__error-message">
            {this.props.updateProductError}
          </p>
          <div className="popup__inner__button-div">
            <button
              className="popup__inner__button-div__button-full"
              onClick={this.handleCreateNewProductAndCallUpdateProduce}
            >
              Update Product
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
