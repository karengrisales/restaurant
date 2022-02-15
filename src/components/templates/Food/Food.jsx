import React from "react";
import { Card } from "../../molecules/Card/Card";
import "./food_style.css";
import grey from "./../../../assets/img/grey.jpg";

export const Food = () => {
  const elements = [];

  for (let index = 0; index < 12; index++) {
    elements.push(index);
  }

  return (
    <div className="container">
      {elements.map((element, index) => {
        return (
          <Card
            name="Nombre"
            description="Descripción"
            price="Precio"
            img={grey}
            key={index}
          />
        );
      })}
    </div>
  );
};
