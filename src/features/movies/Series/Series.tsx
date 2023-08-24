import React from "react";
import { useAppSelector } from "../../../redux-hooks";
import style from "./Series.module.css";
import List from "../../../components/List/List";
import Card from "../../../components/Card/Card";
import { MoviesVisibleSelectors } from "../movies-selectors";
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
            <Card key={series.id} {...series} />
          ))}
      </List>
    </section>
  );
}

export default Series;
