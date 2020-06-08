import React from "react";
import Display from "./Display";
import Filter from "./Filter";
import { getArticles, getUserById } from "../../apiRequests";
import "../../css/mainDisplay.css";

export class MainDisplayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      user: null,
    };
  }

  componentDidMount() {
    if (this.state.articles === null) {
      getArticles().then((articles) => {
        if (articles !== undefined) {
          this.setState({ articles });
        }
      });
    }
    getUserById(1).then((user) => {
      this.setState({ user });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="main-display-view">
        <Filter />
        {articles === null ? <div></div> : <Display articles={articles} />}
      </div>
    );
  }
}
