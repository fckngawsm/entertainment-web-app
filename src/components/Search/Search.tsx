import React from "react";
import style from "./Search.module.css";
import search from "../../images/search.svg";
function Search() {
  return (
    <div className={style.wrapper}>
      <img className={style.image} src={search} alt="search" />
      <input
        type="text"
        className={style.input}
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default Search;
