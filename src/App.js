import "./App.css";
import "./css/main.min.css";
import Appbar from "./components/navbar";
import Home from "./components/home";
import Products from "./components/products";
// import Image from "react-bootstrap/Image";
// import Logo from "./assets/download.jpg";
import Bestoffers from "./components/bestoffers";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Appbar />
      <Home />
      <Products />
      <Bestoffers />
      <Contact />
      <div className="text-center my-5 text-dark">Copyright 2023-2024</div>
    </div>
  );
}

export default App;
