import React from 'react'
import { NavLink } from 'react-router-dom'
import Rating from '../Rating/Rating'
import s from './ProductItem.module.css'

export default function ProductItem({ product, addToCart }) {
  const link = `/products/${product.id}`
  return (
    <div className={s.product}>
      <img src={product.image} alt={product.image} />
      <NavLink to={link} ><h3>{product.title}</h3></NavLink>
      <h4>{product.price} $</h4>
      <Rating rating={product.rating.rate} />
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div >
  )
}
