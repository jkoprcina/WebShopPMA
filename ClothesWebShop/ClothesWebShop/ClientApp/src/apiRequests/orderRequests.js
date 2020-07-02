import axios from "axios";

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
