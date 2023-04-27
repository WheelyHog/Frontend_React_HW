import React from 'react'
import { useParams } from 'react-router-dom'
import s from './WorkPage.module.css'
import { work_data } from '../../data/data'

export default function WorkPage() {
  const { id } = useParams()
  const { full_title, year, tags, text, content } = work_data[id - 1]
  return (
    <div className={s.inner}>
      <h2 className={s.title}>{full_title}</h2>
      <div className={s.wrapper}>
        <p className={s.year}>{year}</p>
        <p className={s.tag}>{tags.join(', ')}</p>
      </div>
      <p className={s.text}>{text}</p>
      <div className={s.content}>
        {content.map((elem, index) => {
          if (elem[0] === 'h1') {
            return <h1 className={s.content_header} key={index}>{elem[1]}</h1>
          } else if (elem[0] === 'img') {
            return <img src={elem[1]} alt={elem[0]} className={s.content_img} key={index} />
          } else if (elem[0] === 'h2') {
            return <h2 className={s.content_subheader} key={index}>{elem[1]}</h2>
          } else if (elem[0] === 'text') {
            return <p className={s.content_text} key={index}>{elem[1]}</p>
          }
        })}
      </div>
    </div>
  )
}
