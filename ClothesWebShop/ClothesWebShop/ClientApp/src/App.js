import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from "./views/productView/Product";
import { Cart } from "./views/cartView/Cart";
import { LoginRegister } from "./views/loginRegisterView/LoginRegister";
import { MainDisplay } from "./views/mainDisplayView/MainDisplay";
import { Route } from "react-router-dom";
import { Layout } from "./views/Layout";
import "./css/popUp.css";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={LoginRegister} />
        <Route exact path="/" component={MainDisplay} />
      </Layout>
    );
  }
}
