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
    cart_count = cart.reduce((accum, elem) => accum + elem.quantity, 0)
    setCart_count(cart_count)
    setCart(cart)
  }

  const removeFromCart = (product) => {

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        if (cart[i].quantity != 0) {
          cart[i].quantity--
        }
      }
    }
    cart_count = cart.reduce((accum, elem) => accum + elem.quantity, 0)
    setCart_count(cart_count)
    cart = cart.filter(elem => elem.quantity !== 0)
    setCart(cart)
  }

  const deleteCartItem = (product) => {
    cart = cart.filter(elem => elem.id !== product.id)
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
          <Route path="/cart/" element={<CartPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} deleteCartItem={deleteCartItem} />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

