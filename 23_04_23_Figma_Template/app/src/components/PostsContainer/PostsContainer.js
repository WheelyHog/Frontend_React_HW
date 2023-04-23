import React from 'react'
import { posts } from '../../data/data'
import Post from '../Post/Post'
import s from './PostsContainer.module.css'

export default function PostsContainer() {
  return (
    <div className={s.posts_container}>
      <div className={s.header}>
        <h2 className={s.title}>Resent posts</h2>
        <p className={s.link}>View All</p>
      </div>
      <div className={s.container}>
        {posts.map((elem, index) => <Post {...elem} key={index} />)}
      </div>
    </div>
  )
}
