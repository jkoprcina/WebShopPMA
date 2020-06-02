import React from "react";
import Display from "./Display";
import Filter from "./Filter";
import { getArticles } from "../../apiRequests";
import { connect } from "react-redux";
import { addArticles } from "../../redux/modules/main";
import store from "../../redux/store";
import "./css/main.css";

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
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    return (
      <div className="mainDisplayView">
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

const mapDispatchToProps = { addArticles };

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplayView);
