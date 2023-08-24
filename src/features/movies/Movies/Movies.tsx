import React from "react";
import { useAppSelector } from "../../../redux-hooks";
import style from "./Movies.module.css";
import { MoviesVisibleSelectors } from "../movies-selectors";
import { SearchSelectors } from "../../search/search-selectors";
import Card from "../../../components/Card/Card";
import List from "../../../components/List/List";
function Movies() {
  const value = useAppSelector(SearchSelectors);
  const movies = useAppSelector((state) =>
    MoviesVisibleSelectors(state, value)
  );
  return (
    <section className={style.movies}>
      <h2 className={style.title}>Movies</h2>
      <List>
        {movies
          ?.filter((data) => data.category === "Movie")
          .map((movie) => (
            <Card {...movie} />
          ))}
      </List>
    </section>
  );
}

export default Movies;
