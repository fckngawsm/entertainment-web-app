import React from "react";
import style from "./Movies.module.css";
import List from "../../../components/List/List";
import { useDispatch } from "react-redux";
import { MoviesListSelectors } from "../movies-selectors";
import { useAppSelector } from "../../../redux-hooks";
import Card from "../../../components/Card/Card";
function Movies() {
  const movies = useAppSelector(MoviesListSelectors);
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
