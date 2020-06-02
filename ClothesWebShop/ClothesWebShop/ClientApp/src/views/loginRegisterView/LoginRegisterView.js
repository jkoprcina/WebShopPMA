import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { getUser, createUser } from "../../apiRequests";
import { validateLogin, validateRegister } from "../../validations";
import { connect } from "react-redux";
import store from "../../redux/store";
import { addUser } from "../../redux/modules/main";
import "./main.css";

class LoginRegisterView extends Component {
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

  updateStateFromStore = () => {
    const currentState = this.props.user;
    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  handleChangeToLoginPage = () => {
    this.setState({ isLogin: true });
    this.emptyState();
  };

  handleChangeToRegisterPage = () => {
    this.setState({ isLogin: false });
    this.emptyState();
  };

  handleLogin = () => {
    if (validateLogin(this.state.email, this.state.password)) {
      getUser(this.state.email, this.state.password).then((user) => {
        if (user !== null) {
          addUser(user);
        }
      });
      this.emptyState();
    }
  };

  handleRegister = () => {
    const { firstName, lastName, username, email, password } = this.state;
    if (validateRegister(firstName, lastName, username, email, password)) {
      createUser(firstName, lastName, username, email, password).then(
        (user) => {
          if (user !== null) {
            addUser(user);
          }
        }
      );
      this.emptyState();
    }
  };

  handleUpdateFirstNameValue = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleUpdateLastNameValue = (e) => {
    this.setState({ lastName: e.target.value });
  };

  handleUpdateEmailValue = (e) => {
    this.setState({ email: e.target.value });
  };

  handleUpdateUsernameValue = (e) => {
    this.setState({ username: e.target.value });
  };

  handleUpdatePasswordValue = (e) => {
    this.setState({ password: e.target.value });
  };

  handleUpdatePasswordRepeatValue = (e) => {
    this.setState({ passwordRepeat: e.target.value });
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
    } = this.state;
    return (
      <div className="main">
        {isLogin ? (
          <Login
            email={email}
            password={password}
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
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.main.user,
});

const mapDispatchToProps = { addUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterView);
