import React from "react";
import Search from "../Search/Search";
import Trending from "../../features/movies/Trending/Trending";

function Main() {
  return (
    <main className="main">
      <Search />
      <Trending />
    </main>
  );
}

export default Main;
