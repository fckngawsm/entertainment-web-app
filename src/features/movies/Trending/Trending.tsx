import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../../components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks";
import { MoviesListSelectors } from "../movies-selectors";
import { loadMovies } from "../movies-slice";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import style from "./Trending.module.css";
function Trending() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(MoviesListSelectors);
  console.log(movies);
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <section className={style.trending}>
      <h2 className={style.title}>Trending</h2>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        freeMode
        // centeredSlides
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
