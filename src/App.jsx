import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Favorite from "./pages/Favorite";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
