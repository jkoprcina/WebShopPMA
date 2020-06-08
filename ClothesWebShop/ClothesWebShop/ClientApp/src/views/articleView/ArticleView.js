import React from "react";
import ImageDisplay from "./ImageDisplay";
import Info from "./Info";
import { getArticle, addArticleToBasket } from "../../apiRequests";
import "../../css/article.css";

export class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    let articleId = this.props.match.params.id;
    if (this.state.article === null || this.state.article.id !== articleId) {
      getArticle(articleId).then((article) => {
        this.setState({ article });
      });
    }
  }

  handleAddToBasket = () => {
    if (this.state.user === null) {
      this.props.history.push("/login");
    } else {
      addArticleToBasket(this.state.article);
    }
  };

  render() {
    const { article } = this.state;
    return (
      <div className="article-view">
        <ImageDisplay />
        {article === null ? (
          <div></div>
        ) : (
          <Info article={article} addToBasket={this.handleAddToBasket} />
        )}
      </div>
    );
  }
}
