import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import style from "./Trending.module.css";
import { loadMovies } from "../movies-slice";
import {
  MoviesInformationSelectors,
  MoviesVisibleSelectors,
} from "../movies-selectors";
import { SearchSelectors } from "../../search/search-selectors";
import CardTrending from "../../../components/CardTranding/CardTranding";
function Trending() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(SearchSelectors);
  const movies = useAppSelector((state) =>
    MoviesVisibleSelectors(state, value)
  );
  const { length, status } = useAppSelector(MoviesInformationSelectors);
  useEffect(() => {
    if (!length) {
      dispatch(loadMovies());
    }
  }, []);
  return (
    <section className={style.trending}>
      <h2 className={style.title}>Trending</h2>
      {status === "loading" && <h2>Loading...</h2>}
      <Swiper
        watchSlidesProgress
        spaceBetween={40}
        slidesPerView={3}
        freeMode
        speed={3000}
        className={style.trending__swiper}
      >
        {movies
          ?.filter((data) => data.isTrending)
          .map((movie) => (
            <SwiperSlide className={style.swiperSlide}>
              {movie.isTrending && <CardTrending key={movie.id} {...movie} />}
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Trending;
