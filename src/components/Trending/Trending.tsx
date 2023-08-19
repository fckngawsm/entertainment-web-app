import React from "react";
import style from "./Trending.module.css";
import Card from "../Card/Card";
function Trending() {
  return (
    <section className={style.trending}>
      <h2 className={style.title}>Trending</h2>
      <Card />
    </section>
  );
}

export default Trending;
