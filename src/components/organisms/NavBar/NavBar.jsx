import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar_style.css";
import profile from "./../../../assets/img/profile_icon.png";

export const NavBar = () => {
  return (
    <nav>
      <div>
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
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active" : "desactive")}
          >
            Agregar
          </NavLink>
        </ul>
      </div>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active" : "desactive")}
      >
        <img src={profile} className="profileimg" alt="profile" />
      </NavLink>
    </nav>
  );
};
