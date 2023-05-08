import React from 'react'
import s from './CartItem.module.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { decrCountAction, delFromCartAction, incrCountAction } from '../../store/cartReducer'

export default function CartItem({ id, image, title, count }) {
  let dispatch = useDispatch()

  return (
    <div className={s.cart_item}>
      <img src={image} alt='#' />
      <h3>{title}</h3>
      <div className={s.button_wrapper}>
        <div className={s.inner}>
          <button className={s.button} onClick={() => dispatch(decrCountAction(id))}>-</button>
          <p>{count}</p>
          <button className={s.button} onClick={() => dispatch(incrCountAction(id))}>+</button>
        </div>
        <RiDeleteBin6Fill className={s.trash} onClick={() => dispatch(delFromCartAction(id))} />
      </div>
    </div>
  )
}
