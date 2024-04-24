import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomePages from "./Pages/HomePage";
import ProductPages from "./Pages/ProductPage";
import CartPages from "./Pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/product" element={<ProductPages />} />
        <Route path="/cart" element={<CartPages />} />
      </Routes>
    </Router>
  );
}

export default App;
