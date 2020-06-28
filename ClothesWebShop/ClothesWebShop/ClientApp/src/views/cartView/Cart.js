import React from "react";
import { OrderTotal } from "./OderTotal";
import { PopUp } from "./PopUp";
import { getCookie } from "../../cookie";
import {
  getUserById,
  addOrder,
  addProductToCart,
  deleteProductFromCart,
} from "../../apiRequests";
import "../../css/cart.css";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      productsInCart: [],
      seen: false,
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
      addProductToCart(
        item.userId,
        item.productId,
        item.amountSelected - 1,
        item.price
      ).then(() => {
        getUserById(item.userId).then((user) => {
          this.setState({ user });
        });
      });
    }
  };

  handleRaiseAmountSelectedByOne = (item) => {
    if (item.article.amountAvailable > item.amountSelected) {
      addProductToCart(
        item.userId,
        item.productId,
        item.amountSelected + 1,
        item.price
      ).then(() => {
        getUserById(item.userId).then((user) => {
          this.setState({ user });
        });
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
            deleteProductFromCart(cart.id).then(() => {
              getUserById(user.id).then(() => {
                this.setState({ seen: !this.state.seen });
              });
            });
          }
        });
      });
    }
  };

  handleGoToMainPage = () => {
    this.setState({ seen: !this.state.seen });
    this.props.history.push("/");
  };

  handleRemoveProduct = (productId) => {
    deleteProductFromCart(productId).then(
      getUserById(this.state.user.id).then((user) => {
        this.setState({ user });
        this.calculatePrice();
      })
    );
  };

  render() {
    const { totalPrice, productsInCart, seen } = this.state;
    return (
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
                      onClick={() => this.handleRemoveFromBasket(item.id)}
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
          {seen ? (
            <PopUp goToMainPage={this.handleGoToMainPage} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
