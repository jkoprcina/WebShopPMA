import React, { Component } from "react";
import ImageDisplay from "./ImageDisplay";
import Info from "./Info";
import { getArticle, getBuyer } from "./apiRequests";
import "./css/articleView.css";

export class ArticleView extends Component {
  state = {
    article: null,
    buyer: null,
  };

  componentDidMount() {
    getArticle(this.props.match.params.id).then((article) => {
      console.log(article);
      if (article !== undefined) {
        this.setState({ article });
      }
    });
  }

  handleBuyArticle = () => {
    getBuyer("password", "something.somebody@gmail.com").then((buyer) => {
      console.log(buyer);
      if (buyer !== undefined) {
        this.setState({ buyer });
      }
    });
  };

  render() {
    const { article } = this.state;
    return (
      <div className="article-view">
        <ImageDisplay />
        {article === null ? (
          <div></div>
        ) : (
          <Info article={article} buyArticle={this.handleBuyArticle} />
        )}
      </div>
    );
  }
}
