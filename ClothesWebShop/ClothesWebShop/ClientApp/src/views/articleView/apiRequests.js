import axios from "axios";

export const getArticle = (id) =>
  axios
    .get("api/articles/get-by-id", { params: { id } })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Get article failed");
    });

export const getBuyer = (password, email) =>
  axios
    .get("api/buyers", { params: { password, email } })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Get buyer failed");
    });
