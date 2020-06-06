var re;

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
  password,
  passwordRepeat
) => {
  if (
    firstName === "" ||
    lastName === "" ||
    username === "" ||
    email === "" ||
    password === "" ||
    passwordRepeat === ""
  ) {
    return "You must fill out all input fields";
  } else if (checkWordLength(firstName)) {
    return "First name must be between 3 and 50 characters long";
  } else if (checkWordLength(lastName)) {
    return "Last name must be between 3 and 50 characters long";
  } else if (!validateEmail(email)) {
    return "Email is not valid";
  } else if (checkWordLength(username)) {
    return "Username must contain only letters, numbers and underscores";
  } else if (!checkUsername(username)) {
    return "Username must be between 3 and 50 characters long";
  } else if (password.length < 6) {
    return "Password must contain at least six characters";
  } else if (password === username) {
    return "Password must be different than username";
  } else if (!checkForNumbers(password)) {
    return "Password must contain at least one number";
  } else if (!checkForLowercase(password)) {
    return "Password must contain at least one lowercase letter";
  } else if (!checkForUppercase(password)) {
    return "Password must contain at least one uppercase letter";
  } else if (password !== passwordRepeat) {
    return "The passwords don't match";
  }
  return "none";
};

const checkWordLength = (word) => {
  if (word.length < 3 || word.length > 50) {
    return true;
  }
  return false;
};
const validateEmail = (email) => {
  re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return re.test(email);
};

const checkUsername = (username) => {
  re = /^\w+$/;
  return re.test(username);
};

const checkForNumbers = (password) => {
  re = /[0-9]/;
  return re.test(password);
};

const checkForLowercase = (password) => {
  re = /[a-z]/;
  return re.test(password);
};

const checkForUppercase = (password) => {
  re = /[A-Z]/;
  return re.test(password);
};
