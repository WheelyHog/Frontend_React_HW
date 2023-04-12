import React from 'react'
import s from './CartItem.module.css'

export default function CartItem({ image, title, price, quantity }) {
  return (
    <div className={s.cart_inner}>
      <div className={s.cart_item}>
        <img src={image} />
        <h4 className={s.title}>Title: {title}</h4>
        <h4 className={s.price}>Price: {price} $</h4>
        <button>-</button>
        <h4 className={s.quantity}>Quantity: {quantity}</h4>
        <button>+</button>
      </div>
      <h4 className={s.total}>Sum: {price * quantity}$</h4>
    </div>
  )
}
