import React from "react";
import { AddProductPopUp } from "./AddProductPopUp";
import { getProducts, addProduct } from "../../apiRequests/productRequests";
import { getBrands } from "../../apiRequests/brandRequests";
import { getUserById } from "../../apiRequests/userRequests";
import { getCookie } from "../../cookie";
import { Link, NavLink } from "react-router-dom";
import { validateProduct } from "../../validations/productValidations";
import "../../css/mainDisplay.css";

export class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      user: null,
      addProductPopUpBool: null,
      productError: "",
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

  handleToggleAddProductPopUp = () => {
    this.setState({
      addProductPopUpBool: !this.state.addProductPopUpBool,
      name: "",
      price: "",
      description: "",
      color: "",
      amountAvailable: 0,
    });
  };

  handleAddProduct = (product) => {
    if (
      validateProduct(
        product.name,
        product.price,
        product.description,
        product.color,
        product.amountAvailable
      )
    ) {
      addProduct(
        product.name,
        product.price,
        product.description,
        product.color,
        product.amountAvailable
      ).then(() => {
        getProducts().then((products) => {
          this.setState({ products });
          this.handleToggleAddProductPopUp();
        });
      });
    }
  };

  render() {
    const { products, addProductPopUpBool } = this.state;
    return (
      <div className="main-display-view">
        <div className="filter">
          <button onClick={this.handleToggleAddProductPopUp}>
            Add new product
          </button>
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
        {addProductPopUpBool ? (
          <AddProductPopUp
            addProduct={this.handleAddProduct}
            exit={this.handleToggleAddProductPopUp}
            productError={this.state.productError}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
