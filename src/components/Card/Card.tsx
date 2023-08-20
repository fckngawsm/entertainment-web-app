import React from "react";
import style from "./Card.module.css";
import play from "../../images/play.svg";
import moveIcon from "../../images/moveIcon.svg";
import favouriteIcon from "../../images/favouriteIcon.svg";
import Rectangle from "../../images/Rectangle.svg";
import { MoviesType } from "../../type/Movies";

interface CardProps extends MoviesType {}

function Card({
  id,
  year,
  title,
  category,
  raitng,
  isTrending,
  thumbnail,
}: CardProps) {
  return (
    <div
      className={style.wrapper}
      style={{ backgroundImage: "url(" + `${thumbnail.regular.large}` + ")" }}
    >
      <img
        className={style.image__favourite}
        src={favouriteIcon}
        alt="favourite"
      />
      <div className={style.play__wrapper}>
        <img className={style.image__play} src={play} alt="play" />
        <h3 className={style.play__title}>Play</h3>
      </div>
      <div className={style.trending__information}>
        <p className={style.trending__description}>{year}</p>
        <div className={style.trending__type}>
          <img
            className={style.trending__type__image}
            src={moveIcon}
            alt="moveIcon"
          />
          <p className={style.trending__description}>{category}</p>
        </div>
        <p className={style.trending__description}>{raitng}</p>
      </div>
      <h3 className={style.trending__title}>{title}</h3>
    </div>
  );
}

export default Card;
