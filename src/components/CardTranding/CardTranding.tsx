import React from "react";
import { useAppDispatch } from "../../redux-hooks";
import style from "./CardTranding.module.css";
import play from "../../images/play.svg";
import moveIcon from "../../images/moveIcon.svg";
import { ReactComponent as BookmarkEmpty } from "../../images/favour.svg";
import { ReactComponent as BookmarkActive } from "../../images/favourActive.svg";
import { MoviesType } from "../../type/Movies";
import { addBookMark } from "../../features/bookmarked/bookmarked-slice";
interface CardTrendingProps extends MoviesType {}

function CardTrending({
  id,
  year,
  title,
  category,
  raitng,
  thumbnail,
  isTrending,
  isBookmarked,
}: CardTrendingProps) {
  const data = {
    id,
    year,
    title,
    category,
    raitng,
    thumbnail,
    isTrending,
    isBookmarked,
  };
  const dispatch = useAppDispatch();
  function handleAddBookmarked(data: MoviesType) {
    dispatch(addBookMark(data));
  }
  return (
    <div
      className={`${style.wrapper} ${style.hover}`}
      style={{ backgroundImage: "url(" + `${thumbnail.regular.large}` + ")" }}
    >
      {isBookmarked ? (
        <BookmarkActive className={style.image__favourite} />
      ) : (
        <BookmarkEmpty
          onClick={() => handleAddBookmarked(data)}
          className={style.image__favourite}
        />
      )}
      <div className={style.play__wrapper}>
        <img className={style.image__play} src={play} alt="play" />
        <h3 className={style.play__title}>Play</h3>
      </div>
      <div className={style.trending__information}>
        <p className={style.trending__description}>{year}</p>
        <span className={style.trending__dot}></span>
        <div className={style.trending__type}>
          <img
            className={style.trending__type__image}
            src={moveIcon}
            alt="moveIcon"
          />
          <span className={style.trending__dot}></span>
          <p className={style.trending__description}>{category}</p>
        </div>
        <p className={style.trending__description}>{raitng}</p>
      </div>
      <h3 className={style.trending__title}>{title}</h3>
    </div>
  );
}

export default CardTrending;
