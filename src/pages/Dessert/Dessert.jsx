import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../molecules/Card/Card";
import "./dessert_style.css";

export const Dessert = () => {
  const [desserts, setDesserts] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/postres").then((response) => {
      setDesserts(response.data);
    });
  }, []);

  if (!desserts) return null;

  return (
    <div className="container__dessert">
      {desserts.map((dessert) => {
        return (
          <Card
            name={dessert.name}
            description={dessert.description}
            price={dessert.price}
            img={dessert.img}
            key={dessert.id}
          />
        );
      })}
    </div>
  );
};
