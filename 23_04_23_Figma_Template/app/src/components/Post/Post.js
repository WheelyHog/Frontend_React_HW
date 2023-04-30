import React from 'react'
import s from './Post.module.css'

export default function Post({ title, date, tags, text }) {

  const newDate = new Date(date)
  const formattedDate = newDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.info}>
        <h4 className={s.info_item}>{formattedDate}</h4>
        <span className={s.divider}>|</span>
        <h4 className={s.info_item}>{tags.join(', ')}</h4>
      </div>
      <p className={s.description}>{text}</p>
    </div>
  )
}
