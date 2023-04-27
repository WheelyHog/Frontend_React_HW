import React from 'react'
import Banner from '../../components/Banner/Banner'
import PostsContainer from '../../components/PostsContainer/PostsContainer'
import WorksContainer from '../../components/WorksContainer/WorksContainer'
import s from './MainPage.module.css'
import { work_data } from '../../data/data'
import { blog_data } from '../../data/data'

export default function MainPage() {
  const sortedWorks = work_data.sort((a, b) => b.year - a.year).slice(0, 3)
  const sorted_blogs = blog_data.slice(0, 2)
  return (
    <>
      <Banner />
      <PostsContainer posts={sorted_blogs} />
      <h2 className={s.title}>Featured works</h2>
      <WorksContainer works={sortedWorks} />
    </>
  )
}
