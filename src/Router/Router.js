import React from "react";
import { Route, Routes } from "react-router-dom";
import { FormAdd } from "../components/molecules/FormAdd/FormAdd";
import { Login } from "../components/organisms/Login/Login";
import { Dessert } from "../components/pages/Dessert/Dessert";
import { Drink } from "../components/pages/Drink/Drink";
import { Error } from "../components/pages/Error/Error";
import { Home } from "../components/pages/Home/Home";
import { MainCourse } from "../components/pages/MainCourse/MainCourse";
import { Soup } from "../components/pages/Soup/Soup";
import { Food } from "../components/templates/Food/Food";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/soup" element={<Soup />}></Route>
      <Route path="/maincourse" element={<MainCourse />}></Route>
      <Route path="/drink" element={<Drink />}></Route>
      <Route path="/dessert" element={<Dessert />}></Route>
      <Route path="/food" element={<Food />}></Route>
      <Route path="/add" element={<FormAdd />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};
