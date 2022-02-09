import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainCourse } from "./pages/MainCourse/MainCourse";
import { Home } from "./pages/Home/Home";
import { Soup } from "./pages/Soup/Soup";
import { Drink } from "./pages/Drink/Drink";
import { Dessert } from "./pages/Dessert/Dessert";
import { Food } from "./templates/Food/Food";
import { NavBar } from "./organisms/NavBar/NavBar";
import { Footer } from "./organisms/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/soup" element={<Soup />}></Route>
        <Route path="/maincourse" element={<MainCourse />}></Route>
        <Route path="/drink" element={<Drink />}></Route>
        <Route path="/dessert" element={<Dessert />}></Route>
        <Route path="/food" element={<Food />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
