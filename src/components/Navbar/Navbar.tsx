import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import defaultAvatar from "../../images/defaultAvatar.svg";
import { ReactComponent as Home } from "../../images/main.svg";
import { ReactComponent as Series } from "../../images/series.svg";
import { ReactComponent as Bookmark } from "../../images/Bookmark.svg";
import { ReactComponent as Movies } from "../../images/moves.svg";
import PopupLogin from "../PopupLogin/PopupLogin";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenPopup() {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__wrapper}>
        <Link to="/">
          <img className={style.navbar__logo} src={logo} alt="logo" />
        </Link>
        <ul className={style.navbar__list}>
          <li className={style.navbar__list_item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? style.active : style.navbar__link}`
              }
            >
              <Home className={style.navbar__list_img} />
            </NavLink>
          </li>
          <li className={style.navbar__list_item}>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `${isActive ? style.active : style.navbar__link}`
              }
            >
              <Movies className={style.navbar__list_img} />
            </NavLink>
          </li>
          <li className={style.navbar__list_item}>
            <NavLink
              to="/tv-series"
              className={({ isActive }) =>
                `${isActive ? style.active : style.navbar__link}`
              }
            >
              <Series className={style.navbar__list_img} />
            </NavLink>
          </li>
          <li className={style.navbar__list_item}>
            <NavLink
              to="/bookmark"
              className={({ isActive }) =>
                `${isActive ? style.active : style.navbar__link}`
              }
            >
              <Bookmark className={style.navbar__list_img} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.navbar__user}>
        <img
          className={style.navbar__user_avatar}
          src={defaultAvatar}
          alt="avatar"
          onClick={handleOpenPopup}
        />
        <PopupLogin isOpen={isOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
