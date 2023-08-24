import React, { useEffect, useState } from "react";
import "../../index.css";
import Navbar from "../Navbar/Navbar";
import Search from "../../features/search/Search/Search";
import HomePage from "../../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage";
import SeriesPage from "../../pages/SeriesPage";
import BookmarkedPage from "../../pages/BookmarkedPage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { isAuthSelector } from "../../features/auth/auth-selectors";
import ProtectedRoute from "../ProtectedRoute";
import { checkAuth } from "../../features/auth/auth-slice";
function App() {
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(checkAuth(jwt));
      setIsLogin(true);
    }
  }, [dispatch]);
  return (
    <div className="page">
      <main className="main">
        {isLogin && (
          <>
            <Navbar />
            <Search />
          </>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <MoviesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv-series"
            element={
              <ProtectedRoute>
                <SeriesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookmark"
            element={
              <ProtectedRoute>
                <BookmarkedPage />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
