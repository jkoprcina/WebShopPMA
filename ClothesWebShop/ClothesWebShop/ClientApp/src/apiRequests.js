import axios from "axios";

export const getProduct = (id) =>
  axios
    .get("api/products/get-by-id", { params: { id } })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Get product failed");
    });

export const getProducts = () =>
  axios
    .get("api/products")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Get products failed");
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

export const addProductToCart = (productId, userId, amountSelected, price) =>
  axios
    .post("api/cart/add", {
      productId,
      userId,
      amountSelected,
      price,
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Add product to cart failed");
    });

export const deleteProductFromCart = (productInCartId) =>
  axios
    .delete("api/cart/delete", { params: { productInCartId } })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Delete product form cart failed");
    });

export const addOrder = (productId, userId, amountSelected, price) =>
  axios
    .post("api/orders", {
      productId,
      userId,
      amountSelected,
      price,
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Add order failed");
    });

export const addProduct = (
  name,
  price,
  description,
  color,
  amountAvailable,
  brandId
) =>
  axios
    .post("api/products", {
      name,
      price,
      description,
      color,
      amountAvailable,
      brandId: 1,
    })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Add product failed");
    });

export const getBrands = () =>
  axios
    .get("api/brands")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Get brands failed");
    });

export const deleteProduct = (productId) =>
  axios
    .delete("api/products", { params: { id: productId } })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      alert(e);
    });
