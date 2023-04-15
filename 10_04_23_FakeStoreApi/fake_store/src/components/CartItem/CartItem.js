import React from 'react'
import s from './CartItem.module.css'
import { RxCrossCircled } from "react-icons/rx"

export default function CartItem({ product, addToCart, removeFromCart, deleteCartItem }) {
  return (
    <div className={s.cart_inner}>
      <div className={s.cart_item}>
        <img src={product.image} />
        <h4 className={s.title}>Title: {product.title}</h4>
        <h4 className={s.price}>Price: {product.price} $</h4>
        <button onClick={() => removeFromCart(product)}>-</button>
        <h4 className={s.quantity}>Quantity: {product.quantity}</h4>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
      <h4 className={s.total}>Sum: {product.price * product.quantity}$</h4>
      <div className={s.close} onClick={() => deleteCartItem(product)}><RxCrossCircled /></div>
    </div>
  )
}

// { image, title, price, quantity }