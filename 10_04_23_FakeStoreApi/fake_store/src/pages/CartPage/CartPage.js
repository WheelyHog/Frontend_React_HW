import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import s from './CartPage.module.css'

export default function CartPage({ cart, addToCart, removeFromCart, deleteCartItem }) {
  return (
    <div className={s.cart_page}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 && <h4 className={s.empty}>Cart is empty...</h4>}
      {cart.map(elem => <CartItem product={elem} key={elem.id} addToCart={addToCart} removeFromCart={removeFromCart} deleteCartItem={deleteCartItem} />)}
      <div className={s.total}>Total: {cart.reduce((accum, elem) => {
        return accum += (elem.quantity * elem.price)
      }, 0)} $</div>
    </div>
  )
}
