import React from "react";
import Address from "./Address";
import MainAddress from "./MainAddress";
import MainPaymentMethod from "./MainPaymentMethod";
import Order from "./Order";
import PaymentMethod from "./PaymentMethod";
import { getCookie } from "../../cookie";
import { getUserById } from "../../apiRequests";
import "../../css/basket.css";

export class BasketView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        addresses: null,
        paymentMethods: null,
        basket: null,
      },
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
        }
      });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div className="basket-view">
        <div className="left">
          <div className="window">
            <h3>Shipping Information</h3>
            {user.addresses === null ? (
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
              {user.addresses === null ? (
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
            {user.paymentMethods === null ? (
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
              {user.paymentMethods === null ? (
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
            {user.basket === null ? (
              <div></div>
            ) : (
              user.basket.map((article, index) => (
                <Order article={article} key={index} />
              ))
            )}
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}
