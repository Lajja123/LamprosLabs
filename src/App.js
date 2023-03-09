import "./App.css";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Inheritokens from "./components/Inheritokens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/inheritokens" element={<Inheritokens />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
