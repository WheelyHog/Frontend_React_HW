import React, { useState } from 'react'
import s from './ShoppingCart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { BsFillCartPlusFill, BsFillCartXFill } from 'react-icons/bs'
import Modal from '../Modal/Modal'
import { removeCartAction } from '../../store/cartReducer'

export default function ShoppingCart() {
  let cart = useSelector(store => store.cart)
  const [active, setActive] = useState(false)
  let dispatch = useDispatch()
  return (
    <div className={s.container}>
      <Modal active={active} setActive={setActive} />
      <div className={s.cart_header}>
        <h2 className={s.cart_title}>Shopping Cart</h2>
        <button onClick={() => setActive(!active)}>Add To Cart<BsFillCartPlusFill className={s.btn_icon} /></button>
        <button onClick={() => dispatch(removeCartAction())}>Remove All<BsFillCartXFill className={s.btn_icon} /></button>
      </div>
      <div className={s.cart}>
        {cart.map((elem, index) => <CartItem {...elem} key={index} />)}
        {cart.length === 0 && <h3>Your Cart is Empty!</h3>}
      </div>
    </div>

  )
}
