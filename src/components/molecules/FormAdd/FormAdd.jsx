import axios from "axios";
import React, { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Message } from "../../atoms/Message/Message";
import { Select } from "../../atoms/Select/Select";
import "./form_style.css";

export const FormAdd = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [food, setFood] = useState("");
  const [image, setImage] = useState("");
  const [soup, setSoup] = useState(null);
  const [maincourse, setMainCourse] = useState(null);
  const [drink, setDrink] = useState(null);
  const [dessert, setDessert] = useState(null);

  const options = [
    { value: "elected", label: "Seleccione" },
    { value: "soup", label: "Sopa" },
    { value: "maincourse", label: "Plato Fuerte" },
    { value: "drink", label: "Bebida" },
    { value: "dessert", label: "Postre" },
  ];

  function createDessert() {
    axios
      .post("http://localhost:8081/postres", {
        name: name,
        description: description,
        price: price,
        img: image,
      })
      .then((response) => {
        setDessert(response.data);
      });
  }

  function createSoup() {
    axios
      .post("http://localhost:8081/sopas", {
        name: name,
        description: description,
        price: price,
        img: image,
      })
      .then((response) => {
        setSoup(response.data);
      });
  }

  function createMainCourse() {
    axios
      .post("http://localhost:8081/principales", {
        name: name,
        description: description,
        price: price,
        img: image,
      })
      .then((response) => {
        setMainCourse(response.data);
      });
  }

  function createDrink() {
    axios
      .post("http://localhost:8081/bebidas", {
        name: name,
        description: description,
        price: price,
        img: image,
      })
      .then((response) => {
        setDrink(response.data);
      });
  }

  function choose() {
    if (food === "Sopa") {
      createSoup();
    } else if (food === "Postre") {
      createDessert();
    } else if (food === "Bebida") {
      createDrink();
    } else if (food === "Plato Fuerte") {
      createMainCourse();
    }
  }

  function captureName(e) {
    setName(e.target.value);
  }

  function captureDescription(e) {
    setDescription(e.target.value);
  }

  function capturePrice(e) {
    setPrice(e.target.value);
  }

  function captureImage(e) {
    setImage(e.target.value);
  }

  function captureFood(e) {
    setFood(e.target.value);
  }

  return (
    <form className="form__add">
      <Select
        name={food}
        options={options}
        text="Por favor elija el tipo de comida a agregar:"
        capture={captureFood}
      />
      <Input
        tag="Nombre"
        type="text"
        name="name"
        placeholder="Ingresa el nombre"
        text="Por favor ingresa el nombre del plato"
        regex=""
        capture={captureName}
      />
      <Input
        tag="Precio"
        type="number"
        name="price"
        placeholder="Ingrese el precio"
        text="Por favor ingresa el precio del plato"
        regex=""
        capture={capturePrice}
      />
      <Input
        tag="Descripción"
        type="text"
        name="description"
        placeholder="Ingrese la desccripción"
        text="Por favor ingresa la descripción del plato"
        regex=""
        capture={captureDescription}
      />
      <Input
        tag="URL Imagen"
        type="text"
        name="image"
        placeholder="Ingrese la URL de la imagen"
        text="Por favor ingresa la URL de la imagen"
        regex=""
        capture={captureImage}
      />
      <div className="form__button">
        <Button name="Agregar" action={choose} className="form__button" />
      </div>
      {false && <Message text="check" />}
    </form>
  );
};
