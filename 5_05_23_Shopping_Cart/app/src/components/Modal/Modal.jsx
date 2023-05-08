import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/cartReducer'
import s from './Modal.module.css'
import { IoClose } from 'react-icons/io5'

export default function Modal({ active, setActive }) {

  let dispatch = useDispatch()

  return (
    <div className={`${s.modal} ${active && s.active}`} onClick={() => setActive(false)}>

      <form className={`${s.modal_content} ${active && s.active}`} onSubmit={(e) => {
        e.preventDefault()
        dispatch(addToCartAction(e.target.title.value))
        e.target.reset()
      }} onClick={(e) => e.stopPropagation()}>
        <IoClose className={s.close} onClick={() => setActive(false)} />
        <label>Enter Product Title: </label>
        <input type="text" name='title' />
        <button onClick={() => setActive(false)}>Add Product</button>
      </form>
    </div >
  )
}
