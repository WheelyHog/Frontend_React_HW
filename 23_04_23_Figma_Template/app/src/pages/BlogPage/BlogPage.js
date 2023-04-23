import React from 'react'
import s from './BlogPage.module.css'
import { blogs } from '../../data/data'
import Blog from '../../components/Blog/Blog'

export default function BlogPage() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Blog</h1>
      <div className={s.blog_container}>
        {blogs.map((elem, index) => <Blog key={index} {...elem} />)}
      </div>
    </div>
  )
}
