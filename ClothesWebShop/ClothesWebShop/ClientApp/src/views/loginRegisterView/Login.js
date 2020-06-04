import React from "react";

const Login = (props) => {
  return (
    <div>
      <section className="login_registration">
        <nav class="login-registration__nav">
          <span className="login-registration__nav__label" id="login">
            Login page
          </span>
          <span className="login-registration__nav__label" id="register">
            Registration page
          </span>
        </nav>
        <input
          type="email"
          placeholder="E-mail..."
          value={props.email}
          onChange={(e) => props.updateEmailValue(e)}
          className="input-div__form__input"
        />
        <input
          type="password"
          placeholder="Password..."
          value={props.password}
          onChange={(e) => props.updatePasswordValue(e)}
          className="input-div__form__input"
        />
        <button onClick={props.login}>LOGIN</button>
      </section>
      <section>
        <p>Don't have an account yet?</p>
        <button onClick={props.changeRegisterPage}>REGISTER</button>
      </section>
    </div>
  );
};
export default Login;
