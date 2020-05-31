import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "./views/Layout";
import MainDisplayView from "./views/mainDisplayView/MainDisplayView";
import { LoginRegisterView } from "./views/loginRegisterView/LoginRegisterView";
import ArticleView from "./views/articleView/ArticleView";
import { Provider } from "react-redux";
import store from "./redux/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={MainDisplayView} />
            <Route path="/login" component={LoginRegisterView} />
            <Route path="/article/:id" component={ArticleView} />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}
