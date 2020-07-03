import React from "react";
import { Info } from "./Info";
import { AddToCartPopUp } from "./AddToCartPopUp";
import { UpdateProductPopUp } from "./UpdateProductPopUp";
import {
  getProduct,
  updateProduct,
  deleteProduct,
} from "../../apiRequests/productRequests";
import { addUpdateProductInCart } from "../../apiRequests/productInCartRequests";
import { getUserById } from "../../apiRequests/userRequests";
import { getBrands } from "../../apiRequests/brandRequests";
import { getCookie } from "../../cookie";
import "../../css/product.css";
import { validateProduct } from "../../validations/productValidations";

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      user: null,
      amountSelected: 0,
      addToCartPopUpBool: false,
      updateProductPopUpBool: false,
      productError: "",
      isAdmin: false,
      selectBrandOptions: null,
      brands: null,
    };
  }

  componentDidMount() {
    let productId = this.props.match.params.id;
    if (this.state.product === null || this.state.product.id !== productId) {
      getProduct(productId).then((product) => {
        this.setState({ product });
        let id = getCookie("id");
        if (id !== null) {
          getUserById(id).then((user) => {
            this.setState({ user });
            if (user.isAdmin) {
              this.setState({ isAdmin: true });
            }
            if (user.productsInCart !== null) {
              user.productsInCart.forEach((item) => {
                if (item.productId === this.state.product.id) {
                  this.setState({ amountSelected: item.amountSelected });
                }
              });
            }
          });
        }
      });
    }
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

  handleLowerAmountSelectedByOne = () => {
    let amountSelected = this.state.amountSelected - 1;
    if (this.state.amountSelected > 0) {
      this.setState({ amountSelected });
    }
  };

  handleRaiseAmountSelectedByOne = () => {
    let amountSelected = this.state.amountSelected + 1;
    if (this.state.amountSelected < this.state.product.amountAvailable) {
      this.setState({ amountSelected });
    }
  };

  handleAddToCart = () => {
    if (this.state.amountSelected !== 0) {
      let id = getCookie("id");
      if (id === null) {
        this.props.history.push("/login");
      } else {
        getUserById(id).then((user) => {
          this.setState({ user });
          addUpdateProductInCart(
            this.state.product.id,
            this.state.user.id,
            this.state.amountSelected,
            this.state.product.price
          ).then(() => {
            getUserById(id).then((user) => {
              this.setState({
                user,
                addToCartPopUpBool: !this.state.addToCartPopUpBool,
              });
            });
          });
        });
      }
    }
  };

  handleUpdateProductPopUpToggle = () => {
    this.setState({
      updateProductPopUpBool: !this.state.updateProductPopUpBool,
    });
  };

  handleGoToCart = () => {
    this.props.history.push("/cart");
  };

  handleStayOnProduct = () => {
    this.setState({ addToCartPopUpBool: !this.state.addToCartPopUpBool });
    this.props.history.push("/");
  };

  handleDeleteProduct = () => {
    deleteProduct(this.state.product.id).then(() =>
      this.props.history.push("/")
    );
  };

  handleUpdateProduct = (product) => {
    let updateProductError = validateProduct(
      product.name,
      product.price,
      product.description,
      product.amountAvailable,
      product.size,
      product.brand
    );
    if (updateProductError === "None") {
      updateProduct(
        product.id,
        product.name,
        product.price,
        product.description,
        product.color,
        product.amountAvailable,
        product.size,
        product.brand
      ).then((response) => {
        if (response !== null) {
          this.setState({ product: response });
          this.handleToggleUpdateProductPopUp();
        }
      });
    } else {
      this.setState({ updateProductError });
    }
  };

  handleToggleUpdateProductPopUp = () => {
    this.setState({
      updateProductPopUpBool: !this.state.updateProductPopUpBool,
    });
  };

  render() {
    const {
      product,
      amountSelected,
      isAdmin,
      selectBrandOptions,
      addToCartPopUpBool,
      updateProductPopUpBool,
    } = this.state;
    return (
      <div className="product-view">
        <div className="image-display">
          <img src={require("../../images/shirt.jpg")} alt="Man in Shirt" />
        </div>
        {product === null ? (
          <div></div>
        ) : (
          <Info
            amountSelected={amountSelected}
            product={product}
            isAdmin={isAdmin}
            addToCart={this.handleAddToCart}
            lowerAmountSelectedByOne={this.handleLowerAmountSelectedByOne}
            raiseAmountSelectedByOne={this.handleRaiseAmountSelectedByOne}
            deleteProduct={this.handleDeleteProduct}
            updateProduct={this.handleToggleUpdateProductPopUp}
          />
        )}
        <div>
          {addToCartPopUpBool ? (
            <AddToCartPopUp
              goToCart={this.handleGoToCart}
              stayOnProduct={this.handleStayOnProduct}
              product={product}
              amountSelected={amountSelected}
            />
          ) : null}
        </div>
        <div>
          {updateProductPopUpBool && selectBrandOptions !== null ? (
            <UpdateProductPopUp
              updateProduct={this.handleUpdateProduct}
              exit={this.handleToggleUpdateProductPopUp}
              product={product}
              brands={selectBrandOptions}
              updateProductError={this.state.updateProductError}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
