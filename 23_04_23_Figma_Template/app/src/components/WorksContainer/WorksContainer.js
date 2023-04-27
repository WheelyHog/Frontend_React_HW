import React from 'react'
import s from './WorksContainer.module.css'
import WorkItem from '../WorkItem/WorkItem'

export default function WorksContainer({ works }) {
  return (
    <div className={s.wrapper}>
      <div className={s.works_container}>
        {works.map((elem, index) => <WorkItem key={index} {...elem} />)}
      </div>

    </div>
  )
}
