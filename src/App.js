import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/organisms/NavBar/NavBar";
import { Footer } from "./components/organisms/Footer/Footer";
import { Router } from "./Router/Router";
import { useFirebaseApp } from "reactfire";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <BrowserRouter>
      <NavBar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
