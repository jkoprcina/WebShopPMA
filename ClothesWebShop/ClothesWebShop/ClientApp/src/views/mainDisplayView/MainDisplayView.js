import React, { Component } from "react";
import Display from "./Display";
import Filter from "./Filter";
import "./main.css";
import { getArticles } from "./apiRequests";

export class MainDisplayView extends Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    getArticles().then((articles) => {
      this.setState({ articles });
      console.log(this.state);
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
