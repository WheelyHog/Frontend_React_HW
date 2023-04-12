import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CategoryItem.module.css'

export default function CategoryItem({ image, title }) {
  const link = `products/category/${title}`
  return (
    <div className={s.category_item}>
      <img src={image} alt={image} />
      <NavLink to={link} className={s.link}><h3>{title}</h3></NavLink>
    </div>
  )
}
