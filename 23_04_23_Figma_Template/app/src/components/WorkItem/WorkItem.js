import React from 'react'
import s from './WorkItem.module.css'

export default function WorkItem({ image, title, year, category, description }) {
  return (
    <div className={s.work_item}>
      <img src={image} alt={title} />
      <div className={s.work_item_info}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.info}>
          <p className={s.year}>{year}</p>
          <p className={s.category}>{category}</p>
        </div>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  )
}
