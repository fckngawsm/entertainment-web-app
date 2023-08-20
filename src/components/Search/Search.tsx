import React from "react";
import style from "./Search.module.css";
import search from "../../images/search.svg";
function Search() {
  return (
    <section className={style.wrapper}>
      <img className={style.image} src={search} alt="search" />
      <input
        type="text"
        className={style.input}
        placeholder="Search for movies or TV series"
      />
    </section>
  );
}

export default Search;
