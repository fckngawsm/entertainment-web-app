import React from "react";
import style from "./CardTranding.module.css";
import play from "../../images/play.svg";
import moveIcon from "../../images/moveIcon.svg";
import { MoviesType } from "../../type/Movies";
import { ReactComponent as BookmarkEmpty } from "../../images/favour.svg";
interface CardTrendingProps extends MoviesType {}

function CardTrending({
  year,
  title,
  category,
  raitng,
  thumbnail,
}: CardTrendingProps) {
  return (
    <div
      className={`${style.wrapper} ${style.hover}`}
      style={{ backgroundImage: "url(" + `${thumbnail.regular.large}` + ")" }}
    >
      <BookmarkEmpty className={style.image__favourite} />
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
