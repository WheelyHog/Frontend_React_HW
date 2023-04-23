import React from 'react'
import s from './Blog.module.css'

export default function Blog({ title, date, category, description }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.info}>
        <h4 className={s.info_item}>{date}</h4>
        <span className={s.divider}>|</span>
        <h4 className={s.info_item_category}>{category}</h4>
      </div>
      <p className={s.description}>{description}</p>
    </div>
  )
}
