import React from "react";

const Login = (props) => {
  return (
    <div className="login-register-view__login">
      <section>
        <input
          type="email"
          placeholder="E-mail..."
          value={props.email}
          onChange={(e) => props.updateEmailValue(e)}
        />
        <input
          type="password"
          placeholder="Password..."
          value={props.password}
          onChange={(e) => props.updatePasswordValue(e)}
        />
        <button onClick={props.login}>LOGIN</button>
      </section>
      <section>
        <p>Don't have an account yet?</p>
        <span
          className="login-register-view__login__"
          onClick={props.changeRegisterPage}
        >
          Register
        </span>
      </section>
    </div>
  );
};
export default Login;
