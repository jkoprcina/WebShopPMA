import React from "react";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Article = (props) => {
  return (
    <NavLink
      tag={Link}
      className="text-dark"
      to={`/article/${props.article.id}`}
    >
      <div className="article">
        <img src={require("../../images/shirt.jpg")} alt="Article" />
      </div>
    </NavLink>
  );
};
export default Article;
