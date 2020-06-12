import React from "react";
import ImageDisplay from "./ImageDisplay";
import { Info } from "./Info";
import { PopUp } from "./PopUp";
import { getArticle, addArticleToBasket, getUserById } from "../../apiRequests";
import "../../css/article.css";
import { getCookie } from "../../cookie";

export class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      user: null,
      amountSelected: 0,
      seen: false,
    };
  }

  componentDidMount() {
    let articleId = this.props.match.params.id;
    if (this.state.article === null || this.state.article.id !== articleId) {
      getArticle(articleId).then((article) => {
        this.setState({ article });
      });
    }
    if (this.state.user === null) {
      let id = getCookie("id");
      if (id !== null) {
        getUserById(id).then((user) => {
          this.setState({ user });
          if (user.baskets !== null) {
            user.baskets.forEach((item) => {
              if (item.articleId === this.state.articleId) {
                this.setState({ amountSelected: item.amountSelected });
              }
            });
          }
        });
      }
    }
  }

  handleLowerAmountSelectedByOne = () => {
    let amountSelected = this.state.amountSelected - 1;
    if (this.state.amountSelected > 0) {
      this.setState({ amountSelected });
    }
  };

  handleRaiseAmountSelectedByOne = () => {
    let amountSelected = this.state.amountSelected + 1;
    if (this.state.amountSelected < this.state.article.amountAvailable) {
      this.setState({ amountSelected });
    }
  };

  handleAddToBasket = () => {
    if (this.state.amountSelected !== 0) {
      let id = getCookie("id");
      if (id === null) {
        this.props.history.push("/login");
      } else {
        getUserById(id).then((user) => {
          this.setState({ user });
          addArticleToBasket(
            this.state.article.id,
            this.state.user.id,
            this.state.amountSelected,
            this.state.article.price
          ).then(() => {
            getUserById(id).then((user) => {
              this.setState({ user, seen: !this.state.seen });
            });
          });
        });
      }
    }
  };

  handleGoToBasket = () => {
    this.props.history.push("/basket");
  };

  handleStayOnArticle = () => {
    this.setState({ seen: !this.state.seen });
    this.props.history.push("/");
  };

  render() {
    const { article, amountSelected, seen } = this.state;
    return (
      <div className="article-view">
        <ImageDisplay />
        {article === null ? (
          <div></div>
        ) : (
          <Info
            amountSelected={amountSelected}
            article={article}
            addToBasket={this.handleAddToBasket}
            lowerAmountSelectedByOne={this.handleLowerAmountSelectedByOne}
            raiseAmountSelectedByOne={this.handleRaiseAmountSelectedByOne}
          />
        )}
        <div>
          {seen ? (
            <PopUp
              goToBasket={this.handleGoToBasket}
              stayOnArticle={this.handleStayOnArticle}
              article={article}
              amountSelected={amountSelected}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
