export const validateLogin = (email, password) => {
  if (email === "") {
    return "You must enter an email address.";
  } else if (password === "") {
    return "You must enter a password";
  }
  return "none";
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
    return "You must fill out all input fields";
  } else if (firstName.length < 3 || firstName.length > 50) {
    return "First name must be between 3 and 50 characters long";
  } else if (lastName.length < 3 || lastName.length > 50) {
    return "Last name must be between 3 and 50 characters long";
  } else if (username.length < 3 || username.length > 50) {
    return "Username must be between 3 and 50 characters long";
  } else if (validateLogin(email)) {
    return "Email is not valid";
  }
  return "none";
};

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
