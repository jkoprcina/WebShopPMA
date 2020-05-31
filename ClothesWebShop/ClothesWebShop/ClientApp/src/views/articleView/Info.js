import React from "react";
import "./css/info.css";

const Info = (props) => {
  return (
    <div className="info">
      <h1>{props.article.name}</h1>
      <p>Short description: {props.article.description}</p>
      <p>Price: {props.article.price} €</p>
      <p>Ammount available: {props.article.ammountAvailable}</p>
      <button onClick={props.buyArticle}>Buy</button>
    </div>
  );
};
export default Info;
