import React from "react";
import Auth from "../components/Auth/Auth";
import style from "../components/Auth/Auth.module.css";
function RegisterPage() {
  return (
    <Auth title="Register">
      <form className={style.form}>
        <fieldset className={style.information}>
          <input
            className={style.input}
            type="email"
            placeholder="Email adress"
          />
          <input className={style.input} type="text" placeholder="Password" />
        </fieldset>
      </form>
    </Auth>
  );
}

export default RegisterPage;
