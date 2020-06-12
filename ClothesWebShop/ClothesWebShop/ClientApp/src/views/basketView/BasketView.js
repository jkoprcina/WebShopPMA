import React from "react";
import Address from "./Address";
import MainAddress from "./MainAddress";
import MainPaymentMethod from "./MainPaymentMethod";
import { Basket } from "./Basket";
import { PopUp } from "./PopUp";
import PaymentMethod from "./PaymentMethod";
import { OrderTotal } from "./OderTotal";
import { getCookie } from "../../cookie";
import {
  getUserById,
  deleteBasket,
  addArticleToBasket,
  addOrder,
} from "../../apiRequests";
import "../../css/basket.css";

export class BasketView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        addresses: [],
        paymentMethods: [],
        baskets: [],
      },
      totalPrice: 0,
      seen: false,
    };
  }
  componentWillMount() {
    let id = getCookie("id");
    if (id !== null) {
      getUserById(id).then((user) => {
        if (user === null) {
          this.props.history.push("/");
          this.props.history.go("/");
        } else {
          this.setState({ user });
          this.calculatePrice();
        }
      });
    }
  }

  handleRemoveFromBasket = (basketId) => {
    deleteBasket(basketId).then(
      getUserById(this.state.user.id).then((user) => {
        this.setState({ user });
        console.log("SHOULD RERENDER");
        this.calculatePrice();
      })
    );
  };

  calculatePrice = () => {
    let totalPrice = 0;
    if (this.state.user.baskets.length !== 0) {
      this.state.user.baskets.forEach((basket) => {
        totalPrice += basket.amountSelected * basket.price;
      });
    }
    this.setState({ totalPrice });
  };

  handleLowerAmountSelectedByOne = (basket) => {
    if (basket.amountSelected > 0) {
      addArticleToBasket(
        basket.userId,
        basket.articleId,
        basket.amountSelected - 1,
        basket.price
      ).then(() => {
        getUserById(basket.userId).then((user) => {
          this.setState({ user });
        });
      });
    }
  };

  handleRaiseAmountSelectedByOne = (basket) => {
    if (basket.article.amountAvailable > basket.amountSelected) {
      addArticleToBasket(
        basket.userId,
        basket.articleId,
        basket.amountSelected + 1,
        basket.price
      ).then(() => {
        getUserById(basket.userId).then((user) => {
          this.setState({ user });
        });
      });
    }
  };

  handleBuy = () => {
    let baskets = this.state.user.baskets;
    if (baskets !== []) {
      console.log(baskets);
      let promise = new Promise(function (baskets) {
        baskets.forEach((basket) => {
          addOrder(
            basket.articleId,
            basket.userId,
            basket.amountSelected,
            basket.price
          ).then((data) => {
            if (data !== undefined) {
              deleteBasket(basket.id).then(() => {
                getUserById(this.state.user.id);
              });
            }
          });
        });
      });
      promise.then(this.setState({ seen: !this.state.seen }));
    }
  };

  handleGoToMainPage = () => {
    this.setState({ seen: !this.state.seen });
    this.props.history.push("/");
  };

  render() {
    const { user, totalPrice, seen } = this.state;
    return (
      <div className="basket-view">
        <div className="left">
          <div className="window">
            <h3>Shipping Information</h3>
            {user.addresses.length === 0 ? (
              <div></div>
            ) : (
              user.addresses.map((address, index) =>
                address.isMainAddress ? (
                  <MainAddress address={address} user={user} key={index} />
                ) : (
                  <div></div>
                )
              )
            )}
            <div className="addresses">
              {user.addresses.length === 0 ? (
                <div></div>
              ) : (
                user.addresses.map((address, index) =>
                  address.isMainAddress ? (
                    <div></div>
                  ) : (
                    <Address address={address} key={index} />
                  )
                )
              )}
            </div>
          </div>
          <div className="window">
            <h3>Payment Methods</h3>
            {user.paymentMethods.length === 0 ? (
              <div></div>
            ) : (
              user.paymentMethods.map((paymentMethod, index) =>
                paymentMethod.isMainPaymentMethod ? (
                  <MainPaymentMethod
                    paymentMethod={paymentMethod}
                    key={index}
                  />
                ) : (
                  <div></div>
                )
              )
            )}
            <div className="payment-methods">
              {user.paymentMethods.length === 0 ? (
                <div></div>
              ) : (
                user.paymentMethods.map((paymentMethod, index) =>
                  paymentMethod.isMainPaymentMethod ? (
                    <div></div>
                  ) : (
                    <PaymentMethod paymentMethod={paymentMethod} key={index} />
                  )
                )
              )}
            </div>
          </div>
          <div className="window">
            <h2>Order Review</h2>
            {user.baskets.length === 0 ? (
              <div></div>
            ) : (
              user.baskets.map((basket, index) => (
                <Basket
                  basket={basket}
                  key={index}
                  removeFromBasket={this.handleRemoveFromBasket}
                  lowerAmountSelectedByOne={this.handleLowerAmountSelectedByOne}
                  raiseAmountSelectedByOne={this.handleRaiseAmountSelectedByOne}
                />
              ))
            )}
          </div>
        </div>
        <div className="right-window">
          <OrderTotal totalPrice={totalPrice} buy={this.handleBuy} />
        </div>
        <div>
          {seen ? <PopUp goToMainPage={this.handleGoToMainPage} /> : null}
        </div>
      </div>
    );
  }
}
