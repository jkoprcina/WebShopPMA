import React, { Component } from "react";
import Display from "./Display";
import Filter from "./Filter";
import { getArticles } from "./apiRequests";
import "./css/main.css";

export class MainDisplayView extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="mainDisplayView">
        <Filter />
        {articles === [] ? <div></div> : <Display articles={articles} />}
      </div>
    );
  }
}
