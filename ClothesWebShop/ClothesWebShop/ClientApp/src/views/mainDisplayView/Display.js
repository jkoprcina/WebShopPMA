import React from "react";
import "./display.css";
import Article from "./Article";

const Display = (props) => {
  return (
    <div className="display">
      {props.articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};
export default Display;
