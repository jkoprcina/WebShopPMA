import React from "react";

const Register = (props) => {
  return (
    <div>
      <section>
        <input type="text" placeholder="First name..." />
        <input type="text" placeholder="Last name..." />
        <input type="email" placeholder="E-mail..." />
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password..." />
        <input type="password" placeholder="Password again..." />
        <button onClick={props.signUp}>REGISTER</button>
      </section>
      <section>
        <p>Already have an account?</p>
        <button onClick={props.changeToLoginPage}>LOGIN</button>
      </section>
    </div>
  );
};

export default Register;
