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

export const updateProduct = (
  id,
  name,
  price,
  description,
  color,
  amountAvailable
) =>
  axios
    .put("api/products", {
      id,
      name,
      price,
      description,
      color,
      amountAvailable,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error);
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
