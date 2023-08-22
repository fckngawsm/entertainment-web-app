import React from "react";
import style from "./Search.module.css";
import search from "../../../images/search.svg";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks";
import { setValue } from "../search-slice";
import { MoviesVisibleSelectors } from "../../movies/movies-selectors";
import { SearchSelectors } from "../search-selectors";
function Search() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(SearchSelectors);
  const movies = useAppSelector((state) =>
    MoviesVisibleSelectors(state, value)
  );
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setValue(e.currentTarget.value));
  }
  return (
    <section className={style.search}>
      <div className={style.wrapper}>
        <img className={style.image} src={search} alt="search" />
        <input
          type="text"
          className={style.input}
          placeholder="Search for movies or TV series"
          onChange={handleChange}
        />
      </div>
      {value.length > 0 && (
        <h2 className={style.info}>
          Found {movies?.length} results for {value}
        </h2>
      )}
    </section>
  );
}

export default Search;
