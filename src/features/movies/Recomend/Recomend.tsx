import React, { useEffect } from "react";
import List from "../../../components/List/List";
import style from "./Recomend.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks";
import { MoviesListSelectors } from "../movies-selectors";
import { loadMovies } from "../movies-slice";
import Card from "../../../components/Card/Card";
function Recomend() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(MoviesListSelectors);
  useEffect(() => {
    dispatch(loadMovies);
  }, []);
  return (
    <section className={style.recomend}>
      <h2 className={style.title}>Recommended for you</h2>
      <List>
        {movies?.slice(9).map((movie) => (
          <Card {...movie} />
        ))}
      </List>
    </section>
  );
}

export default Recomend;
