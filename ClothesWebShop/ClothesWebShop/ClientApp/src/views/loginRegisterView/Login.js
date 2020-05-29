import React from "react";

const Login = (props) => {
  return (
    <div>
      <section>
        <input type="email" placeholder="E-mail..." />
        <input type="password" placeholder="Password..." />
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
