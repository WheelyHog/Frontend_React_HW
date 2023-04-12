import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import s from './CartPage.module.css'

export default function CartPage({ cart }) {
  return (
    <div className={s.cart_page}>
      <h2>Shopping Cart</h2>
      {cart.map(elem => <CartItem {...elem} key={elem.id} />)}
    </div>
  )
}
