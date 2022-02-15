import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import "./form_style.css";

export const FormAdd = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [desserts, setDesserts] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/postres").then((response) => {
      setDesserts(response.data);
    });
  }, []);

  function createDessert() {
    axios
      .post("http://localhost:8081/postres", {
        name: name,
        description: description,
        price: price,
      })
      .then((response) => {
        setDesserts(response.data);
      });

    console.log();
  }

  if (!desserts) return "No desserts!";

  function captureName(e) {
    setName(e.target.value);
  }

  function captureDescription(e) {
    setDescription(e.target.value);
  }

  function capturePrice(e) {
    setPrice(e.target.value);
  }

  return (
    <form className="form__add">
      <Input
        tag="Nombre"
        type="text"
        name="name"
        placeholder="Ingresa el nombre"
        capture={captureName}
      />
      <Input
        tag="Precio"
        type="number"
        name="price"
        placeholder="Ingrese el precio"
        capture={capturePrice}
      />
      <Input
        tag="Descripción"
        type="text"
        name="description"
        placeholder="Ingrese la desccripción"
        capture={captureDescription}
      />
      <Button name="Agregar" action={createDessert} />
    </form>
  );
};
