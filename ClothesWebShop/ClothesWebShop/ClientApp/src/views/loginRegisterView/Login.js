import React from "react";

const Login = (props) => {
  return (
    <div>
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
        <button onClick={props.changeRegisterPage}>REGISTER</button>
      </section>
    </div>
  );
};
export default Login;
