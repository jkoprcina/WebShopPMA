import React from "react";
import { AddProductPopUp } from "./AddProductPopUp";
import { NavMenu } from "../NavMenu";
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
      selectBrandOptions: null,
      brands: null,
      value: 0,
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    if (this.state.products === null) {
      getProducts().then((products) => {
        if (products !== undefined) {
          this.setState({ products });
        }
      });
      if (this.state.selectBrandOptions === null) {
        getBrands().then((brands) => {
          this.setState({ brands });
          let selectBrandOptions = [];
          brands.map((brand) =>
            selectBrandOptions.push({ value: brand.id, label: brand.name })
          );
          this.setState({ selectBrandOptions });
        });
      }
    }
    let id = getCookie("id");
    if (id !== null) {
      getUserById(id).then((user) => {
        this.setState({ user });
      });
    } else {
      this.setState({ user: null });
    }
  };

  handleRerenderParentCallback = () => {
    this.getInfo();
  };

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
    let productError = validateProduct(
      product.name,
      product.price,
      product.description,
      product.amountAvailable,
      product.size,
      product.brand
    );
    if (productError === "None") {
      addProduct(
        product.name,
        product.price,
        product.description,
        product.color,
        product.amountAvailable,
        product.size,
        product.brand
      ).then(() => {
        getProducts().then((products) => {
          this.setState({ products });
          this.handleToggleAddProductPopUp();
        });
      });
    } else {
      this.setState({ productError });
    }
  };

  render() {
    const {
      products,
      addProductPopUpBool,
      user,
      selectBrandOptions,
    } = this.state;
    return (
      <div>
        <NavMenu rerenderParentCallback={this.handleRerenderParentCallback} />
        <div className="main-display-view">
          <div className="filter">
            {user !== null && user.isAdmin ? (
              <button
                className="main-display-view__button"
                onClick={this.handleToggleAddProductPopUp}
              >
                Add new product
              </button>
            ) : (
              <div></div>
            )}
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
                    <img
                      src={require("../../images/shirt.jpg")}
                      alt="Product"
                    />
                  </div>
                </NavLink>
              ))}
            </div>
          )}
          {addProductPopUpBool && selectBrandOptions !== null ? (
            <AddProductPopUp
              brands={selectBrandOptions}
              addProduct={this.handleAddProduct}
              exit={this.handleToggleAddProductPopUp}
              productError={this.state.productError}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
