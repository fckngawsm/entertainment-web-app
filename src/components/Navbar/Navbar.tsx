import React from "react";
import style from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import { ReactComponent as Home } from "../../images/main.svg";
import { ReactComponent as Series } from "../../images/series.svg";
import { ReactComponent as Favour } from "../../images/favour.svg";
import { ReactComponent as Moves } from "../../images/moves.svg";
import defaultAvatar from "../../images/defaultAvatar.svg";
function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__wrapper}>
        <img className={style.navbar__logo} src={logo} alt="logo" />
        <ul className={style.navbar__list}>
          <li className={style.navbar__list_item}>
            <a href="" className={style.navbar__link}>
              <Home className={style.navbar__list_img} />
            </a>
          </li>
          <li className={style.navbar__list_item}>
            <a href="" className={style.navbar__link}>
              <Moves className={style.navbar__list_img} />
            </a>
          </li>
          <li className={style.navbar__list_item}>
            <a href="" className={style.navbar__link}>
              <Series className={style.navbar__list_img} />
            </a>
          </li>
          <li className={style.navbar__list_item}>
            <a href="" className={style.navbar__link}>
              <Favour className={style.navbar__list_img} />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.navbar__user}>
        <img
          className={style.navbar__user_avatar}
          src={defaultAvatar}
          alt="avatar"
        />
      </div>
    </nav>
  );
}

export default Navbar;
