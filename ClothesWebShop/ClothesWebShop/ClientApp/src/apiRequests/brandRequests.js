import axios from "axios";

export const getBrands = () =>
  axios
    .get("api/brands")
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      alert(response);
      return null;
    });
