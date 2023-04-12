import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import s from './App.module.css'
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { useState } from "react";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";



function App() {
  let [cart, setCart] = useState([])

  const addToCart = (product) => {
    if (!cart.includes(product)) {
      product.quantity = 1;
      cart = [...cart, product]
    } else product.quantity++;
    cart = [...cart]
    setCart(cart)
    console.log(cart);
  }

  return (
    <div className={s.container}>
      <Router>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/category/:category" element={<CategoryPage />} />
          <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductInfo />} />
          <Route path="/cart/" element={<CartPage cart={cart} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
