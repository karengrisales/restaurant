import React from "react";
import "./card_style.css";
import grey from "./../../assets/img/grey.jpg";
import shopping from "./../../assets/img/shopping _icon.png";

export const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__front">
          <img src={grey} alt="food_img" className="card__imgMain" />
          <span className="card__title">Nombre plato</span>
        </div>
        <div className="card__back">Descripción del producto</div>
      </div>

      <div className="card__characteristics">
        <span className="card__price">$ Precio</span>
        <img src={shopping} alt="shopping_icon" className="card__imgShopping" />
      </div>
    </div>
  );
};
