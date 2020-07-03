import axios from "axios";

export const addUpdateProductInCart = (
  productId,
  userId,
  amountSelected,
  price
) =>
  axios
    .post("api/productsInCart", {
      productId,
      userId,
      amountSelected,
      price,
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      alert(response);
      return null;
    });

export const deleteProductInCart = (productInCartId) =>
  axios
    .delete("api/productsInCart", { params: { id: productInCartId } })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      alert(response);
      return null;
    });
