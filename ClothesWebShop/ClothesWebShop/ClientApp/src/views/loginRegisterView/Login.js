import React from "react";

const Login = (props) => {
  return (
    <div className="login-register-view__login">
      <section>
        <h2>Welcome Back</h2>
        <div className="login-register-view__input-div">
          <label>Email</label>
          <input
            type="email"
            placeholder="E-mail"
            value={props.email}
            onChange={(e) => props.updateEmailValue(e)}
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          value={props.password}
          onChange={(e) => props.updatePasswordValue(e)}
        />
        <p className="login-register-view__error-message">{props.loginError}</p>
        <button onClick={props.login}>SIGN IN</button>
      </section>
      <section>
        <p>
          Don't have an account yet?{" "}
          <span
            className="login-register-view__login__"
            onClick={props.changeRegisterPage}
          >
            Register
          </span>
        </p>
      </section>
    </div>
  );
};
export default Login;
