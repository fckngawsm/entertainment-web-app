import React from "react";
import style from "./PopupLogin.module.css";
import { Link } from "react-router-dom";

interface PopupLoginProps {
  isOpen: boolean;
}

function PopupLogin({ isOpen }: PopupLoginProps) {
  return (
    <>
      {isOpen && (
        <div className={style.wrapper}>
          <Link className={style.link} to="/sign-up">
            <button className={style.button}>Login</button>
          </Link>
          <Link className={style.link} to="/register">
            <button className={style.button}>Sign up</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default PopupLogin;
