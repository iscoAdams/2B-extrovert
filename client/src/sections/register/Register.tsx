import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <main className="container">
      <section className="content">
        <div className="form">
          <img
            src="https://i.pinimg.com/236x/4d/a8/bb/4da8bb993057c69a85b9b6f2775c9df2.jpg"
            alt="profile"
          />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            autoFocus
          />
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="nickname"
          />
          <input type="email" id="email" name="email" placeholder="email" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Sign up</button>
          <p>
            Alrady have Account? <a href="/login"> Sign in</a>
          </p>
        </div>
        <div className="banner">
          <h1>Have fun!</h1>
        </div>
      </section>
    </main>
  );
};
export default Register;
