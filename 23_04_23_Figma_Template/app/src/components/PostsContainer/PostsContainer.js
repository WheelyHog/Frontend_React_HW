import React from 'react'
import { NavLink } from 'react-router-dom'

import Post from '../Post/Post'
import s from './PostsContainer.module.css'

export default function PostsContainer({ posts }) {
  return (
    <div className={s.posts_container}>
      <div className={s.header}>
        <h2 className={s.title}>Resent posts</h2>
        <NavLink to='/blog' className={s.blog_link}><p className={s.link}>View All</p></NavLink>
      </div>
      <div className={s.container}>
        {posts.map((elem, index) => <Post {...elem} key={index} />)}
      </div>
    </div>
  )
}
