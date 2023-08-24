import React from "react";
import Auth from "../components/Auth/Auth";
import style from "../components/Auth/Auth.module.css";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <Auth title="Login">
      <form className={style.form}>
        <fieldset className={style.information}>
          <input
            className={style.input}
            type="email"
            placeholder="Email adress"
          />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
          />
          <button className={style.button}>Login to your account</button>
        </fieldset>
        <div className={style.wrapper__redirect}>
          <p className={style.text}>Don’t have an account?</p>
          <Link className={style.link} to="/register">
            <span className={style.span}>Sign Up</span>
          </Link>
        </div>
      </form>
    </Auth>
  );
}

export default LoginPage;
