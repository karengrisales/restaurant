import axios from "axios";
import React, { useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input/Input";
import { Message } from "../../atoms/Message/Message";
import { Select } from "../../atoms/Select/Select";
import "./form_style.css";

export const FormAdd = () => {
  const [food, setFood] = useState({ field: "", valid: null });
  const [name, setName] = useState({ field: "", valid: null });
  const [price, setPrice] = useState({ field: "", valid: null });
  const [description, setDescription] = useState({ field: "", valid: null });
  const [image, setImage] = useState({ field: "", valid: null });
  const [validForm, setValidForm] = useState(null);
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

  const expressions = {
    text: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    url: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
    price: /^\d{3,6}$/,
  };

  function createDessert() {
    axios
      .post("http://localhost:8081/postres", {
        name: name.field,
        description: description.field,
        price: price.field,
        img: image.field,
      })
      .then((response) => {
        setDessert(response.data);
      });
  }

  function createSoup() {
    axios
      .post("http://localhost:8081/sopas", {
        name: name.field,
        description: description.field,
        price: price.field,
        img: image.field,
      })
      .then((response) => {
        setSoup(response.data);
      });
  }

  function createMainCourse() {
    axios
      .post("http://localhost:8081/principales", {
        name: name.field,
        description: description.field,
        price: price.field,
        img: image.field,
      })
      .then((response) => {
        setMainCourse(response.data);
      });
  }

  function createDrink() {
    axios
      .post("http://localhost:8081/bebidas", {
        name: name.field,
        description: description.field,
        price: price.field,
        img: image.field,
      })
      .then((response) => {
        setDrink(response.data);
      });
  }

  const choose = () => {
    if (
      food.valid === "true" &&
      name.valid === "true" &&
      description.valid === "true" &&
      image.valid === "true" &&
      price.valid === "true"
    ) {
      if (food.field === "Sopa") {
        createSoup();
      } else if (food.field === "Postre") {
        createDessert();
      } else if (food.field === "Bebida") {
        createDrink();
      } else if (food.field === "Plato Fuerte") {
        createMainCourse();
      }
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      food.valid === "true" &&
      name.valid === "true" &&
      description.valid === "true" &&
      image.valid === "true" &&
      price.valid === "true"
    ) {
      setValidForm(true);
      setFood({ valid: null });
      setName({ field: "", valid: null });
      setPrice({ field: "", valid: null });
      setDescription({ field: "", valid: null });
      setImage({ field: "", valid: null });
    } else {
      setValidForm(false);
    }
  };

  return (
    <form className="form__add" onSubmit={submitForm}>
      <Select
        name={food}
        options={options}
        text="Por favor elija el tipo de comida a agregar:"
        status={food}
        changeStatus={setFood}
        textError="Por favor selecciona una opción"
      />
      <Input
        tag="Nombre"
        type="text"
        name="name"
        placeholder="Ingresa el nombre"
        textError="Por favor ingresa el nombre del plato"
        regex={expressions.text}
        status={name}
        changeStatus={setName}
      />
      <Input
        tag="Precio"
        type="number"
        name="price"
        placeholder="Ingrese el precio"
        textError="Por favor ingresa el precio del plato"
        regex={expressions.price}
        status={price}
        changeStatus={setPrice}
      />
      <Input
        tag="Descripción"
        type="text"
        name="description"
        placeholder="Ingrese la desccripción"
        textError="Por favor ingresa la descripción del plato"
        regex={expressions.text}
        status={description}
        changeStatus={setDescription}
      />
      <Input
        tag="URL Imagen"
        type="text"
        name="image"
        placeholder="Ingrese la URL de la imagen"
        textError="Por favor ingresa la URL de la imagen"
        regex={expressions.url}
        status={image}
        changeStatus={setImage}
      />
      <div className="form__button">
        <Button name="Agregar" action={choose} />
      </div>
      {validForm === false && <Message text="alert" />}
      {validForm === true && <Message text="check" />}
    </form>
  );
};
