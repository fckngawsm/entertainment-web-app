import React from "react";
import style from "./Series.module.css";
import List from "../../../components/List/List";
import { useAppSelector } from "../../../redux-hooks";
import { MoviesListSelectors } from "../movies-selectors";
import Card from "../../../components/Card/Card";
function Series() {
  const movies = useAppSelector(MoviesListSelectors);
  return (
    <section className={style.series}>
      <h2 className={style.title}>TV Series</h2>
      <List>
        {movies
          ?.filter((data) => data.category === "TV Series")
          .map((series) => (
            <Card {...series} />
          ))}
      </List>
    </section>
  );
}

export default Series;
