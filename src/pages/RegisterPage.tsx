import React from "react";
import Auth from "../components/Auth/Auth";
import style from "../components/Auth/Auth.module.css";
import { Link } from "react-router-dom";
function RegisterPage() {
  return (
    <Auth title="Sign Up">
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
          <input
            className={style.input}
            type="password"
            placeholder="Repeat password"
          />
          <button className={style.button}>Create an account</button>
        </fieldset>
        <div className={style.wrapper__redirect}>
          <p className={style.text}>Already have an account?</p>
          <Link className={style.link} to="/login">
            <span className={style.span}>Login</span>
          </Link>
        </div>
      </form>
    </Auth>
  );
}

export default RegisterPage;
