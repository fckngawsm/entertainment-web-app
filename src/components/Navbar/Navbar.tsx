import React from "react";
import style from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import main from "../../images/main.svg";
import series from "../../images/series.svg";
import favour from "../../images/favour.svg";
import moves from "../../images/moves.svg";
import defaultAvatar from "../../images/defaultAvatar.svg";
function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__wrapper}>
        <img className={style.navbar__logo} src={logo} alt="logo" />
        <ul className={style.navbar__list}>
          <li className={style.navbar__list_item}>
            <img className={style.navbar__list_img} src={main} alt="main" />
          </li>
          <li className={style.navbar__list_item}>
            <img className={style.navbar__list_img} src={moves} alt="moves" />
          </li>
          <li className={style.navbar__list_item}>
            <img className={style.navbar__list_img} src={series} alt="series" />
          </li>
          <li className={style.navbar__list_item}>
            <img className={style.navbar__list_img} src={favour} alt="favour" />
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
