import React from "react";

export const Select = () => {
  return (
    <select name="select">
      <option value="selection" selected>
        Seleccione
      </option>
      <option value="soup">Sopa</option>
      <option value="maincourse">Plato Fuerte</option>
      <option value="dessert">Postre</option>
      <option value="drink">Bebida</option>
    </select>
  );
};
