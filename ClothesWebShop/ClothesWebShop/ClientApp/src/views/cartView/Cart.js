import React from "react";
import { OrderTotal } from "./OderTotal";
import { ConfirmationPopUp } from "./ConfirmationPopUp";
import { NavMenu } from "../NavMenu";
import { getCookie } from "../../cookie";
import { getUserById } from "../../apiRequests/userRequests";
import { addOrder } from "../../apiRequests/orderRequests";
import {
  addUpdateProductInCart,
  deleteProductInCart,
} from "../../apiRequests/productInCartRequests";
import "../../css/cart.css";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      productsInCart: [],
      confirmationPopUpBool: false,
      user: null,
      value: 0,
    };
    this.getUser();
  }

  getUser = () => {
    let id = getCookie("id");
    if (id !== null) {
      getUserById(id).then((user) => {
        if (user === null) {
          this.props.history.push("/");
          this.props.history.go("/");
        } else {
          this.setState({ user, productsInCart: user.productsInCart });
          this.calculatePrice();
        }
      });
    }
  };

  handleRerenderParentCallback = () => {
    this.setState({ value: this.state.value++ });
  };

  calculatePrice = () => {
    let totalPrice = 0;
    if (this.state.user.productsInCart.length !== 0) {
      this.state.user.productsInCart.forEach((item) => {
        totalPrice += item.amountSelected * item.price;
      });
    }
    this.setState({ totalPrice });
  };

  handleLowerAmountSelectedByOne = (item) => {
    if (item.amountSelected > 0) {
      addUpdateProductInCart(
        this.state.user.id,
        item.productId,
        item.amountSelected - 1,
        item.price
      ).then(() => {
        this.getUser();
      });
    }
  };

  handleRaiseAmountSelectedByOne = (item) => {
    if (item.amountSelected < item.product.amountAvailable) {
      addUpdateProductInCart(
        item.userId,
        item.productId,
        item.amountSelected + 1,
        item.price
      ).then(() => {
        this.getUser();
      });
    }
  };

  handleBuy = () => {
    var user = this.state.user;
    if (user.productsInCart !== []) {
      user.productsInCart.forEach((cart) => {
        addOrder(
          cart.productId,
          cart.userId,
          cart.amountSelected,
          cart.price
        ).then((data) => {
          if (data !== undefined) {
            deleteProductInCart(cart.id).then(() => {
              getUserById(user.id).then(() => {
                this.setState({
                  confirmationPopUpBool: !this.state.confirmationPopUpBool,
                });
              });
            });
          }
        });
      });
    }
  };

  handleGoToMainPage = () => {
    this.setState({ confirmationPopUpBool: !this.state.confirmationPopUpBool });
    this.props.history.push("/");
  };

  handleRemoveProductInCart = (productId) => {
    deleteProductInCart(productId).then(
      getUserById(this.state.user.id).then((user) => {
        this.getUser();
      })
    );
  };

  render() {
    const { totalPrice, productsInCart, confirmationPopUpBool } = this.state;
    return (
      <div>
        <NavMenu rerenderParentCallback={this.handleRerenderParentCallback} />
        <div className="cart-view">
          <div className="left">
            <div className="window">
              <h2>Order Review</h2>
              {productsInCart.length === 0 || productsInCart === undefined ? (
                <div>Your cart is empty</div>
              ) : (
                productsInCart.map((item, index) => (
                  <div className="cart" key={index}>
                    <div className="order-image-div">
                      <img
                        src={require("../../images/shirt.jpg")}
                        alt="Article mini"
                      />
                    </div>
                    <div className="order-description">
                      <span>{item.product.name}</span>
                      <div className="order-description__second-row">
                        <span className="margin-right">
                          Color:{item.product.color}
                        </span>
                        <span className="margin-right">
                          Size:{item.product.size}
                        </span>
                        <div className="order-description__second-row__right">
                          <span
                            className="prettyMinus"
                            onClick={() =>
                              this.handleLowerAmountSelectedByOne(item)
                            }
                          >
                            &#8722;
                          </span>
                          <span>{item.amountSelected}</span>
                          <span
                            className="prettyPlus"
                            onClick={() =>
                              this.handleRaiseAmountSelectedByOne(item)
                            }
                          >
                            &#43;
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => this.handleRemoveProductInCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="right-window">
            <OrderTotal totalPrice={totalPrice} buy={this.handleBuy} />
          </div>
          <div>
            {confirmationPopUpBool ? (
              <ConfirmationPopUp goToMainPage={this.handleGoToMainPage} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
