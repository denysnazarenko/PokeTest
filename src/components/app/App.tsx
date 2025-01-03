import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/header.tsx";
import HomePage from "../pages/HomePage.tsx";
import FavoritesPage from "../pages/FavoritesPage.tsx";
import ScrollToTopButton from "../scrollToTopButton/ScrollToTopButton.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        <ScrollToTopButton />
      </div>
    </Router >
  );
};

export default App;