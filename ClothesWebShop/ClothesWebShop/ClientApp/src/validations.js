export const validateLogin = (email, password) => {
  if (email === "") {
    return "You must enter an email address.";
  } else if (password === "") {
    return "You must enter a password";
  }
  return true;
};

export const validateRegister = (
  firstName,
  lastName,
  username,
  email,
  password
) => {
  if (
    firstName === "" ||
    lastName === "" ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return false;
  }
  return true;
};
