import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import FavoritesPage from "../pages/FavoritesPage.tsx";

const App: React.FC = () => {
  return (
    <div className="app">
      <HomePage />
      <FavoritesPage />
    </div>
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<HomePage />} /> */}
    //     {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
    //   </Routes>
    // </Router>
  );
};

export default App;