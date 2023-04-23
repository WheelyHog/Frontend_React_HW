import React from 'react'
import s from './WorksContainer.module.css'
import { works } from '../../data/data'
import WorkItem from '../WorkItem/WorkItem'

export default function WorksContainer() {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Featured works</h2>
      <div className={s.works_container}>
        {works.map((elem, index) => <WorkItem key={index} {...elem} />)}
      </div>

    </div>
  )
}
