import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../molecules/Card/Card";
import "./drink_styles.css";

export const Drink = () => {
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/bebidas").then((response) => {
      setDrinks(response.data);
    });
  }, []);

  if (!drinks) return null;

  return (
    <div className="container__drink">
      {drinks.map((drink) => {
        return (
          <Card
            name={drink.name}
            description={drink.description}
            price={drink.price}
            img={drink.img}
            key={drink.id}
          />
        );
      })}
    </div>
  );
};
