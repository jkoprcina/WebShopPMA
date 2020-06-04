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

export const getArticles = () =>
  axios
    .get("api/articles")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Get articles failed");
    });

export const getUser = (email, password) =>
  axios
    .get("api/users", { params: { email, password } })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(() => {
      alert("Get user failed");
    });

export const createUser = (firstName, lastName, username, email, password) =>
  axios
    .post("api/users", {
      firstName,
      lastName,
      username,
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Add user failed");
    });
