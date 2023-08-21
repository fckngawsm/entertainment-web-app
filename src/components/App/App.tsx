import React from "react";
import "../../index.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "../../pages/Movies";
function App() {
  return (
    <div className="page">
      <main className="main">
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
