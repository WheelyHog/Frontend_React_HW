import React from 'react'
import s from './BlogPage.module.css'
import { blog_data as posts } from '../../data/data'
import Post from '../../components/Post/Post'

export default function BlogPage() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Blog</h1>
      <div className={s.blog_container}>
        {posts.sort((a, b) => b.date - a.date).map((elem, index) => <div key={index}>
          <Post key={index} {...elem} />
          <hr />
        </div>)}
      </div>
    </div>
  )
}
