import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { NavMenu } from "../NavMenu";
import {
  getUserByUsernamePassword,
  createUser,
} from "../../apiRequests/userRequests";
import {
  validateLogin,
  validateRegister,
} from "../../validations/userValidations";
import "../../css/loginRegister.css";
import { setCookie } from "../../cookie";

export class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
      loginError: "",
      registerError: "",
      value: 0,
    };
  }

  emptyState = () => {
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
    });
  };

  handleRerenderParentCallback = () => {
    this.setState({ value: this.state.value++ });
  };

  handleChangeToLoginPage = () => {
    this.setState({
      isLogin: true,
    });
    this.emptyState();
  };

  handleChangeToRegisterPage = () => {
    this.setState({
      isLogin: false,
    });
    this.emptyState();
  };

  goToMainPage = () => {
    if (this.props.user !== null) {
      this.props.history.push("/");
    }
  };

  handleLogin = () => {
    const { email, password } = this.state;
    let handleLoginError = validateLogin(email, password);
    if (handleLoginError === "none") {
      getUserByUsernamePassword(email, password).then((user) => {
        if (user !== null) {
          let promise = new Promise(function (resolve) {
            setCookie("id", user.id);
            setTimeout(() => resolve(""), 1000);
          });
          promise.then(() => {
            this.goToMainPage();
          });
        } else {
          this.setState({ loginError: "No user with that data exists" });
        }
      });
    } else {
      this.setState({ loginError: handleLoginError });
    }
  };

  handleRegister = () => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      passwordRepeat,
    } = this.state;
    let handleRegisterError = validateRegister(
      firstName,
      lastName,
      username,
      email,
      password,
      passwordRepeat
    );
    console.log(firstName, lastName, username, email, password, passwordRepeat);
    if (handleRegisterError === "none") {
      createUser(firstName, lastName, username, email, password).then(
        (user) => {
          if (user !== null) {
            setCookie("id", user.id);
            this.goToMainPage();
          } else if (user === undefined) {
            this.setState({ registerError: "Input is not valid" });
          }
        }
      );
    } else {
      this.setState({ registerError: handleRegisterError });
    }
  };

  handleUpdateFirstNameValue = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleUpdateLastNameValue = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleUpdateEmailValue = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleUpdateUsernameValue = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleUpdatePasswordValue = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleUpdatePasswordRepeatValue = (e) => {
    this.setState({
      passwordRepeat: e.target.value,
    });
  };

  render() {
    const {
      isLogin,
      firstName,
      lastName,
      email,
      username,
      password,
      passwordRepeat,
      loginError,
      registerError,
    } = this.state;
    return (
      <div>
        <NavMenu rerenderParentCallback={this.handleRerenderParentCallback} />
        <div className="login-register-view">
          {isLogin ? (
            <Login
              email={email}
              password={password}
              loginError={loginError}
              updateEmailValue={this.handleUpdateEmailValue}
              updatePasswordValue={this.handleUpdatePasswordValue}
              login={this.handleLogin}
              changeRegisterPage={this.handleChangeToRegisterPage}
            />
          ) : (
            <Register
              firstName={firstName}
              lastName={lastName}
              email={email}
              username={username}
              password={password}
              passwordRepeat={passwordRepeat}
              registerError={registerError}
              updateFirstNameValue={this.handleUpdateFirstNameValue}
              updateLastNameValue={this.handleUpdateLastNameValue}
              updateEmailValue={this.handleUpdateEmailValue}
              updateUsernameValue={this.handleUpdateUsernameValue}
              updatePasswordValue={this.handleUpdatePasswordValue}
              updatePasswordRepeatValue={this.handleUpdatePasswordRepeatValue}
              register={this.handleRegister}
              changeToLoginPage={this.handleChangeToLoginPage}
            />
          )}
        </div>
      </div>
    );
  }
}
