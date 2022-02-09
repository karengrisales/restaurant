import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../../molecules/Card/Card";
import "./soup_style.css";

export const Soup = () => {
  const [soups, setSoups] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/sopas").then((response) => {
      setSoups(response.data);
    });
  }, []);

  if (!soups) return null;

  return (
    <div className="container__soup">
      {soups.map((soup) => {
        return (
          <Card
            name={soup.name}
            description={soup.description}
            price={soup.price}
            img={soup.img}
            key={soup.id}
          />
        );
      })}
    </div>
  );
};
