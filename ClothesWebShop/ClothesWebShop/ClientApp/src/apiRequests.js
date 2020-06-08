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

export const getUserByUsernamePassword = (email, password) =>
  axios
    .get("api/users/by-username-password", { params: { email, password } })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
    });

export const getUserById = (id) =>
  axios
    .get("api/users/by-id", { params: { id } })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return null;
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
      return null;
    });

export const addArticleToBasket = (article, userId) =>
  axios
    .post("api/users/add-article-to-basket", {
      article,
      userId,
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Add article to basket failed");
    });
