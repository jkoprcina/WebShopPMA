import React from "react";
import Display from "./Display";
import Filter from "./Filter";
import { getArticles, getUser } from "../../apiRequests";
import { connect } from "react-redux";
import { addArticles, attachUser } from "../../redux/modules/main";
import store from "../../redux/store";
import "../../css/mainDisplay.css";

class MainDisplayView extends React.Component {
  updateStateFromStore = () => {
    const currentState = this.props.articles;
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };
  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    if (this.props.articles.length === 0) {
      getArticles().then((articles) => {
        if (articles !== undefined) {
          this.props.addArticles(articles);
        }
      });
    }
    getUser("e", "p").then((user) => {
      this.props.attachUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    return (
      <div className="main-display-view">
        <Filter />
        {this.props.articles === [] ? (
          <div></div>
        ) : (
          <Display articles={this.props.articles} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.main.articles,
});

const mapDispatchToProps = { addArticles, attachUser };

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplayView);
