import React from "react";
import "../../index.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import HomePage from "../../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage";
function App() {
  return (
    <div className="page">
      <main className="main">
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
