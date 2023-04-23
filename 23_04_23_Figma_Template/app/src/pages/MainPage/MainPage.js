import React from 'react'
import Banner from '../../components/Banner/Banner'
import PostsContainer from '../../components/PostsContainer/PostsContainer'
import WorksContainer from '../../components/WorksContainer/WorksContainer'
// import s from './MainPage.module.css'

export default function MainPage() {
  return (
    <>
      <Banner />
      <PostsContainer />
      <WorksContainer />
    </>
  )
}
