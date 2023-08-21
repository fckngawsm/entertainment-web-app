import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../../components/CardTranding/CardTranding";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks";
import {
  MoviesListSelectors,
  MoviesInformationSelectors,
} from "../movies-selectors";
import { loadMovies } from "../movies-slice";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import style from "./Trending.module.css";
function Trending() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(MoviesListSelectors);
  const { error, status } = useAppSelector(MoviesInformationSelectors);
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <section className={style.trending}>
      <h2 className={style.title}>Trending</h2>
      {status === "loading" && <h2>Loading...</h2>}
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        freeMode
        speed={3000}
        className={style.trending__swiper}
      >
        {movies
          ?.filter((data) => data.isTrending)
          .map((movie) => (
            <SwiperSlide>
              {movie.isTrending && <Card key={movie.id} {...movie} />}
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Trending;
