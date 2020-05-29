import axios from "axios";

export const getArticles = () =>
  axios
    .get("api/articles")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Get articles failed");
    });
