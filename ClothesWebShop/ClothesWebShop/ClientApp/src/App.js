import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./views/Layout";
import { MainDisplayView } from "./views/mainDisplayView/MainDisplayView";
import { LoginRegisterView } from "./views/loginRegisterView/LoginRegisterView";
import { ArticleView } from "./views/articleView/ArticleView";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={MainDisplayView} />
        <Route path="/login" component={LoginRegisterView} />
        <Route path="/article" component={(props) => ArticleView} />
      </Layout>
    );
  }
}
