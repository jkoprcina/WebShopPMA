import React from "react";
import Address from "./Address";
import MainAddress from "./MainAddress";
import MainPaymentMethod from "./MainPaymentMethod";
import PaymentMethod from "./PaymentMethod";
import { connect } from "react-redux";
import store from "../../redux/store";

class BasketView extends React.Component {
  updateStateFromStore = () => {
    const currentState = this.props.basket;
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };

  componentWillMount() {
    if (this.props.user === null) {
      console.log(this.props.user);
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
    return (
      <div>
        <MainAddress />
        {this.props.user.adresses.map((address) =>
          address.isMainAddress ? <div></div> : <Address address={address} />
        )}
        <MainPaymentMethod />
        {this.props.user.paymentMethods.map((paymentMethod) =>
          paymentMethod.isMainPaymentMethod ? (
            <div></div>
          ) : (
            <PaymentMethod paymentMethod={paymentMethod} />
          )
        )}
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
