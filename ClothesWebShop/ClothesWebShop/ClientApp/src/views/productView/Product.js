import React from "react";
import { Info } from "./Info";
import { PopUp } from "./PopUp";
import {
  getProduct,
  addProductToCart,
  getUserById,
  deleteProduct,
} from "../../apiRequests";
import { getCookie } from "../../cookie";
import "../../css/product.css";

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      user: null,
      amountSelected: 0,
      seen: false,
    };
  }

  componentDidMount() {
    let productId = this.props.match.params.id;
    if (this.state.product === null || this.state.product.id !== productId) {
      getProduct(productId).then((product) => {
        this.setState({ product });
      });
    }
    let id = getCookie("id");
    if (id !== null) {
      getUserById(id).then((user) => {
        this.setState({ user });
        if (user.productsInCart !== null) {
          user.productsInCart.forEach((item) => {
            if (item.productId === this.state.product.id) {
              this.setState({ amountSelected: item.amountSelected });
            }
          });
        }
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
          addProductToCart(
            this.state.product.id,
            this.state.user.id,
            this.state.amountSelected,
            this.state.product.price
          ).then(() => {
            getUserById(id).then((user) => {
              this.setState({ user, seen: !this.state.seen });
            });
          });
        });
      }
    }
  };

  handleGoToCart = () => {
    this.props.history.push("/cart");
  };

  handleStayOnProduct = () => {
    this.setState({ seen: !this.state.seen });
    this.props.history.push("/");
  };

  handleDeleteProduct = () => {
    deleteProduct(this.state.product.id).then(() =>
      this.props.history.push("/")
    );
  };

  render() {
    const { product, amountSelected, seen } = this.state;
    return (
      <div className="article-view">
        <div className="image-display">
          <img src={require("../../images/shirt.jpg")} alt="Man in Shirt" />
        </div>
        {product === null ? (
          <div></div>
        ) : (
          <Info
            amountSelected={amountSelected}
            product={product}
            addToCart={this.handleAddToCart}
            lowerAmountSelectedByOne={this.handleLowerAmountSelectedByOne}
            raiseAmountSelectedByOne={this.handleRaiseAmountSelectedByOne}
            deleteProduct={this.handleDeleteProduct}
          />
        )}
        <div>
          {seen ? (
            <PopUp
              goToCart={this.handleGoToCart}
              stayOnProduct={this.handleStayOnProduct}
              product={product}
              amountSelected={amountSelected}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
