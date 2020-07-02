import React from "react";

export const Register = (props) => {
  return (
    <div>
      <section>
        <h2>Welcome</h2>
        <input
          type="text"
          placeholder="First name"
          value={props.firstName}
          onChange={props.updateFirstNameValue}
        />
        <input
          type="text"
          placeholder="Last name"
          value={props.lastName}
          onChange={props.updateLastNameValue}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={props.email}
          onChange={props.updateEmailValue}
        />
        <input
          type="text"
          placeholder="Username"
          value={props.username}
          onChange={props.updateUsernameValue}
        />
        <input
          type="password"
          placeholder="Password"
          value={props.password}
          onChange={props.updatePasswordValue}
        />
        <input
          type="password"
          placeholder="Password again"
          value={props.passwordRepeat}
          onChange={props.updatePasswordRepeatValue}
        />
        <label>{props.registerError}</label>
        <button onClick={props.register}>REGISTER</button>
      </section>
      <section>
        <p>
          Already have an account?{" "}
          <span onClick={props.changeToLoginPage}>Login</span>
        </p>
      </section>
    </div>
  );
};
