import "./App.css";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Inheritokens from "./components/Inheritokens";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/inheritokens" element={<Inheritokens />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
