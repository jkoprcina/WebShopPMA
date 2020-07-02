export const validateProduct = (name, price, description, amountAvailable) => {
  if (name.length < 3 || name.length > 50) {
    return "The name must be between 3 and 50 characters long";
  } else if (!(price > 0)) {
    return "The price must be a positive number";
  } else if (description.length < 3 || description.length > 200) {
    return "The description must be between 3 and 200 characters long";
  } else if (!(price > 0)) {
    return "The price must be a positive number";
  } else if (amountAvailable < 0) {
    return "The amount available must be a positive number";
  } else {
    return "None";
  }
};
