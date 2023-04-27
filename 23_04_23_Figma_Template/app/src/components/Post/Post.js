import React from 'react'
import s from './Post.module.css'

export default function Post({ title, date, tags, text }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.info}>
        <h4 className={s.info_item}>{date}</h4>
        <span className={s.divider}>|</span>
        <h4 className={s.info_item}>{tags}</h4>
      </div>
      <p className={s.description}>{text}</p>
    </div>
  )
}
