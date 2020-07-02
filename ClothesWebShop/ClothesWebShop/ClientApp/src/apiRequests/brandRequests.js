import axios from "axios";

export const getBrands = () =>
  axios
    .get("api/brands")
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      alert("Get brands failed");
    });
