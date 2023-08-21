import React from "react";
import style from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import { ReactComponent as Home } from "../../images/main.svg";
import { ReactComponent as Series } from "../../images/series.svg";
import { ReactComponent as Bookmark } from "../../images/Bookmark.svg";
import { ReactComponent as Movies } from "../../images/moves.svg";
import defaultAvatar from "../../images/defaultAvatar.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__wrapper}>
        <img className={style.navbar__logo} src={logo} alt="logo" />
        <ul className={style.navbar__list}>
          <li className={style.navbar__list_item}>
            <Link to="/" className={style.navbar__link}>
              <Home className={style.navbar__list_img} />
            </Link>
          </li>
          <li className={style.navbar__list_item}>
            <Link to="/movies" className={style.navbar__link}>
              <Movies className={style.navbar__list_img} />
            </Link>
          </li>
          <li className={style.navbar__list_item}>
            <Link to="/tv-series" className={style.navbar__link}>
              <Series className={style.navbar__list_img} />
            </Link>
          </li>
          <li className={style.navbar__list_item}>
            <Link to="/bookmark" className={style.navbar__link}>
              <Bookmark className={style.navbar__list_img} />
            </Link>
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
