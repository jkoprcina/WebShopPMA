import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import "./main.css";

export class LoginRegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogInPage: true,
    };
  }
  componentDidMount = () => {
    this.setState({ isLogin: this.props.isLogin });
  };

  handleChangeToLoginPage = () => {
    this.setState({ isLogin: true });
  };

  handleChangeRegisterPage = () => {
    this.setState({ isLogin: false });
  };

  handleSignIn = () => {};

  handleSignUp = () => {};

  render() {
    const { isLogin } = this.state;
    return (
      <div className="main">
        {isLogin ? (
          <Login
            login={this.handleSignIn}
            changeRegisterPage={this.handleChangeRegisterPage}
          />
        ) : (
          <Register
            register={this.handleSignUp}
            changeToLoginPage={this.handleChangeToLoginPage}
          />
        )}
      </div>
    );
  }
}
