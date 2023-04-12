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
  let [cart_count, setCart_count] = useState(0)


  const addToCart = (product) => {

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        cart[i].quantity++
        cart_count = cart.reduce((accum, elem) => accum + elem.quantity, 0)
        setCart_count(cart_count)
        return
      }
    }
    product.quantity = 1;
    cart = [...cart, product]

    // if (!cart.includes(product)) {
    //   console.log('Not');
    //   product.quantity = 1;
    //   cart = [...cart, product]
    // } else {
    //   product.quantity++;
    //   console.log('Yes');
    //   cart = [...cart]
    // }
    cart_count = cart.reduce((accum, elem) => accum + elem.quantity, 0)
    setCart_count(cart_count)
    setCart(cart)
  }

  return (
    <div className={s.container}>
      <Router>
        <Header cart_count={cart_count} />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/products/category/:category" element={<CategoryPage addToCart={addToCart} />} />
          <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductInfo />} />
          <Route path="/cart/" element={<CartPage cart={cart} />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

