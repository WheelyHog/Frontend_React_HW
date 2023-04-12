import React from 'react'
import s from './Cart.module.css'

const Cart = ({ id, name, price, quantity, incrCart, decrCart }) => {
  return (

    <div className={s.cart_inner}>
      <p>{name}</p>
      <p>Price: {price} $</p>
      <div className={s.triggers}>
        <button onClick={() => decrCart(id)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrCart(id)}>+</button>
      </div>

      <button>X</button>
    </div>


  )
}

export default Cart
