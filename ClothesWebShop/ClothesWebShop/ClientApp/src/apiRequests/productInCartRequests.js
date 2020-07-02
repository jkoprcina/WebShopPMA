import axios from "axios";

export const addProductInCart = (productId, userId, amountSelected, price) =>
  axios
    .post("api/cart/add", {
      productId,
      userId,
      amountSelected,
      price,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(() => {
      alert("Add product to cart failed");
    });

export const deleteProductInCart = (productInCartId) =>
  axios
    .delete("api/cart/delete", { params: { productInCartId } })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Delete product form cart failed");
    });
