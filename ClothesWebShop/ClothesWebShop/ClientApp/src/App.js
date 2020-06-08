import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArticleView } from "./views/articleView/ArticleView";
import { BasketView } from "./views/basketView/BasketView";
import { LoginRegisterView } from "./views/loginRegisterView/LoginRegisterView";
import { MainDisplayView } from "./views/mainDisplayView/MainDisplayView";
import { Route } from "react-router-dom";
import { Layout } from "./views/Layout";

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route path="/article/:id" component={ArticleView} />
        <Route path="/basket" component={BasketView} />
        <Route path="/login" component={LoginRegisterView} />
        <Route exact path="/" component={MainDisplayView} />
      </Layout>
    );
  }
}
