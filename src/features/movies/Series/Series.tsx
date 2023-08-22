import React from "react";
import style from "./Series.module.css";
import List from "../../../components/List/List";
import { useAppSelector } from "../../../redux-hooks";
import { MoviesVisibleSelectors } from "../movies-selectors";
import Card from "../../../components/Card/Card";
import { SearchSelectors } from "../../search/search-selectors";
function Series() {
  const value = useAppSelector(SearchSelectors);
  const movies = useAppSelector((state) =>
    MoviesVisibleSelectors(state, value)
  );
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
