import React, { useEffect } from "react";
import style from "./Recomend.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks";
import { loadMovies } from "../movies-slice";
import { SearchSelectors } from "../../search/search-selectors";
import { MoviesVisibleSelectors } from "../movies-selectors";
import Card from "../../../components/Card/Card";
import List from "../../../components/List/List";
function Recomend() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(SearchSelectors);
  const movies = useAppSelector((state) =>
    MoviesVisibleSelectors(state, value)
  );
  useEffect(() => {
    dispatch(loadMovies);
  }, []);
  return (
    <section className={style.recomend}>
      <h2 className={style.title}>Recommended for you</h2>
      <List>
        {movies?.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </List>
    </section>
  );
}

export default Recomend;
