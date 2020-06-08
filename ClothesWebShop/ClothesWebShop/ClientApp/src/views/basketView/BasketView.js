import React from "react";
import Address from "./Address";
import MainAddress from "./MainAddress";
import MainPaymentMethod from "./MainPaymentMethod";
import Order from "./Order";
import PaymentMethod from "./PaymentMethod";
import { connect } from "react-redux";
import store from "../../redux/store";
import "../../css/basket.css";

class BasketView extends React.Component {
  updateStateFromStore = () => {
    const currentState = this.props.basket;
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };

  componentWillMount() {
    if (this.props.user === null) {
      this.props.history.push("/");
      this.props.history.go("/");
    }
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    const user = this.props.user;
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
            {this.props.basket === null ? (
              <div></div>
            ) : (
              this.props.basket.map((article, index) => (
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

const mapStateToProps = (state) => ({
  basket: state.main.basket,
  user: state.main.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BasketView);
