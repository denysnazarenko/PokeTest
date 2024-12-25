import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="flex justify-center space-x-10 p-4 bg-gray-800 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : ""
            }
          >
            Усі покемони
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "underline" : ""
            }
          >
            Улюблені покемони
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;