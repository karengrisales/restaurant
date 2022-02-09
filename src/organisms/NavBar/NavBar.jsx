import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar_style.css";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "desactive")}
        >
          Home
        </NavLink>
        <NavLink
          to="/soup"
          className={({ isActive }) => (isActive ? "active" : "desactive")}
        >
          Sopas
        </NavLink>
        <NavLink
          to="/maincourse"
          className={({ isActive }) => (isActive ? "active" : "desactive")}
        >
          Platos Fuertes
        </NavLink>
        <NavLink
          to="/drink"
          className={({ isActive }) => (isActive ? "active" : "desactive")}
        >
          Bebidas
        </NavLink>
        <NavLink
          to="/dessert"
          className={({ isActive }) => (isActive ? "active" : "desactive")}
        >
          Postres
        </NavLink>
      </ul>
    </nav>
  );
};
