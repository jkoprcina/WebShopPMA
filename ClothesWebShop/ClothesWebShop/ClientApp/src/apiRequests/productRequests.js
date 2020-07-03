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
  size,
  brand
) =>
  axios
    .post("api/products", {
      name,
      price,
      description,
      color,
      amountAvailable,
      size,
      brandId: brand.id,
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      alert(response);
      return null;
    });

export const updateProduct = (
  id,
  name,
  price,
  description,
  color,
  amountAvailable,
  size,
  brand
) =>
  axios
    .put("api/products", {
      id,
      name,
      price,
      description,
      color,
      amountAvailable,
      size,
      brand,
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
