import React, { Component } from "react";

export class ArticleView extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log("HEY " + id);
  }

  render() {
    return <div>Hello</div>;
  }
}
