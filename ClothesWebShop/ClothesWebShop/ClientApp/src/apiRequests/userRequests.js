import axios from "axios";

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
    .catch((response) => {
      alert(response);
    });
