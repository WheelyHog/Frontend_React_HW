import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './WorkItem.module.css'

export default function WorkItem({ id, main_img, title, year, tags, text }) {
  const link = `/works/${id}`
  return (
    <div className={s.work_item}>
      <NavLink to={link}><img src={main_img} alt={title} className={s.image} /></NavLink>
      <div className={s.work_item_info}>
        <NavLink to={link} className={s.title}><h2>{title}</h2></NavLink>
        <div className={s.info}>
          <p className={s.year}>{year}</p>
          <p className={s.category}>{tags[0]}</p>
        </div>
        <p className={s.description}>{text}</p>
      </div>
    </div>
  )
}
