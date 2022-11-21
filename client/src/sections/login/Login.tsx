import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <main className="container">
      <section className="content">
        <div className="banner"></div>
        <div className="form">
          <h1>Welcome back!</h1>
          {/* <img src="https://public-images.interaction-design.org/literature/articles/heros/article_130931_hero_6278e304dae1c7.27910397.jpg" alt="profile" />  */}
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            autoFocus
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
          <p>
            Don't have Account? <a href="/register"> Sign Up</a>
          </p>
        </div>
      </section>
    </main>
  );
};
export default Login;
