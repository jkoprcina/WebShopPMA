import React from "react";
import ImageDisplay from "./ImageDisplay";
import Info from "./Info";
import { getArticle } from "../../apiRequests";
import { connect } from "react-redux";
import store from "../../redux/store";
import { addArticleToBasket, addArticle } from "../../redux/modules/main";
import "../../css/article.css";

class ArticleView extends React.Component {
  updateStateFromStore = () => {
    const currentState = this.props.article;
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    let articleId = this.props.match.params.id;
    if (this.props.article === null || this.props.article.id !== articleId) {
      getArticle(articleId).then((article) => {
        if (article !== undefined) {
          this.props.addArticle(article);
        }
      });
    }
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  handleAddToBasket = () => {
    if (this.props.user === null) {
      this.props.history.push("/login");
    } else {
      let article = this.props.article;
      article.ammountInBasket = 1;
      this.props.addArticleToBasket(this.props.article);
    }
  };

  render() {
    return (
      <div className="article-view">
        <ImageDisplay />
        {this.props.article === null ? (
          <div></div>
        ) : (
          <Info
            article={this.props.article}
            addToBasket={this.handleAddToBasket}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  article: state.main.article,
  user: state.main.user,
});

const mapDispatchToProps = { addArticleToBasket, addArticle };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
