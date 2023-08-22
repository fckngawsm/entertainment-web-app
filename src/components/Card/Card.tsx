import React from "react";
import style from "./Card.module.css";
import play from "../../images/play.svg";
import moveIcon from "../../images/moveIcon.svg";
import { MoviesType } from "../../type/Movies";
import { ReactComponent as BookmarkEmpty } from "../../images/favour.svg";
import { ReactComponent as BookmarkActive } from "../../images/favourActive.svg";
import { useAppDispatch } from "../../redux-hooks";
import { addBookMark } from "../../features/bookmarked/bookmarked-slice";
interface CardProps extends MoviesType {}

function Card({
  id,
  year,
  title,
  category,
  raitng,
  thumbnail,
  isTrending,
  isBookmarked,
}: CardProps) {
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
    <div>
      <div
        className={style.wrapper}
        style={{ backgroundImage: "url(" + `${thumbnail.regular.large}` + ")" }}
      >
        {isBookmarked? (
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
      </div>
      <div className={style.card__information}>
        <p className={style.card__description}>{year}</p>
        <span className={style.card__dot}></span>
        <div className={style.card__type}>
          <img
            className={style.card__type__image}
            src={moveIcon}
            alt="moveIcon"
          />
          <span className={style.card__dot}></span>
          <p className={style.card__description}>{category}</p>
        </div>
        <p className={style.card__description}>{raitng}</p>
      </div>
      <h3 className={style.card__title}>{title}</h3>
    </div>
  );
}

export default Card;
