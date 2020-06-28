import React from "react";
import { PopUp } from "./PopUp";
import {
  getProducts,
  addProduct,
  getBrands,
  getUserById,
} from "../../apiRequests";
import { getCookie } from "../../cookie";
import { Link, NavLink } from "react-router-dom";
import { validateAddProduct } from "../../validations";
import "../../css/mainDisplay.css";

export class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      user: null,
      seen: null,
      name: "",
      price: "",
      description: "",
      color: "",
      amountAvailable: 0,
    };
  }

  componentDidMount() {
    if (this.state.products === null) {
      getProducts().then((products) => {
        if (products !== undefined) {
          this.setState({ products });
        }
      });
      getBrands().then((brands) => {
        if (brands !== undefined) {
          this.setState({ brands });
        }
      });
    }
    let id = getCookie("id");
    if (id !== null) {
      getUserById(id).then((user) => {
        this.setState({ user });
      });
    }
  }

  handleTogglePopUp = () => {
    this.setState({
      seen: !this.state.seen,
      name: "",
      price: "",
      description: "",
      color: "",
      amountAvailable: 0,
    });
  };

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

  handleAddProduct = () => {
    const { name, price, description, color, amountAvailable } = this.state;
    if (validateAddProduct(name, price, description, color, amountAvailable)) {
      addProduct(name, price, description, color, amountAvailable).then(() => {
        getProducts().then((products) => {
          this.setState({ products });
        });
      });
    }
  };
  render() {
    const {
      products,
      seen,
      name,
      price,
      description,
      color,
      amountAvailable,
      brands,
    } = this.state;
    return (
      <div className="main-display-view">
        <div className="filter">
          <button onClick={this.handleTogglePopUp}>Add new product</button>
        </div>
        {products === null ? (
          <div></div>
        ) : (
          <div className="display">
            {products.map((product, index) => (
              <NavLink
                tag={Link}
                className="text-dark"
                to={`/product/${product.id}`}
                key={index}
              >
                <div className="product">
                  <img src={require("../../images/shirt.jpg")} alt="Product" />
                </div>
              </NavLink>
            ))}
          </div>
        )}
        {seen ? (
          <PopUp
            name={name}
            price={price}
            description={description}
            color={color}
            amountAvailable={amountAvailable}
            brands={brands}
            updateNameValue={this.handleUpdateNameValue}
            updatePriceValue={this.handleUpdatePriceValue}
            updateDescriptionValue={this.handleUpdateDescriptionValue}
            updateColorValue={this.handleUpdateColorValue}
            updateAmountAvailableValue={this.handleUpdateAmountAvailableValue}
            togglePopUp={this.handleTogglePopUp}
            addProduct={this.handleAddProduct}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
