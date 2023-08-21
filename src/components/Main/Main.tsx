import React from "react";
import Search from "../Search/Search";
import Trending from "../../features/movies/Trending/Trending";
import Recomend from "../../features/movies/Recomend/Recomend";

function Main() {
  return (
    <main className="main">
      <Search />
      <Trending />
      <Recomend />
    </main>
  );
}

export default Main;
