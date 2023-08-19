import React from "react";
import style from "./Card.module.css";
import play from "../../images/play.svg";
import moveIcon from "../../images/moveIcon.svg";
import favouriteIcon from "../../images/favouriteIcon.svg";
import Rectangle from "../../images/Rectangle.svg";
function Card() {
  return (
    <div
      className={style.wrapper}
      style={{ backgroundImage: "url(" + `${Rectangle}` + ")" }}
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
        <p className={style.trending__description}>2019</p>
        <div className={style.trending__type}>
          <img
            className={style.trending__type__image}
            src={moveIcon}
            alt="moveIcon"
          />
          <p className={style.trending__description}>Movie</p>
        </div>
        <p className={style.trending__description}>PG</p>
      </div>
      <h3 className={style.trending__title}>Beyond Earth</h3>
    </div>
  );
}

export default Card;
