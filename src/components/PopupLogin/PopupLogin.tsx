import React from "react";
import style from "./PopupLogin.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { isAuthSelector } from "../../features/auth/auth-selectors";
import { logOut } from "../../features/auth/auth-slice";

interface PopupLoginProps {
  isOpen: boolean;
}

function PopupLogin({ isOpen }: PopupLoginProps) {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(isAuthSelector);
  function handleLogOut() {
    dispatch(logOut());
  }
  return (
    <>
      {isOpen && (
        <div className={style.wrapper}>
          {isLogin ? (
            <Link className={style.link} to="/login">
              <button onClick={handleLogOut} className={style.button}>
                Logout
              </button>
            </Link>
          ) : (
            <>
              <Link className={style.link} to="/sign-up">
                <button className={style.button}>Login</button>
              </Link>
              <Link className={style.link} to="/register">
                <button className={style.button}>Sign up</button>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default PopupLogin;
