import React from 'react'
import WorksContainer from '../../components/WorksContainer/WorksContainer'
import s from './WorksPage.module.css'
import { work_data } from '../../data/data'

export default function WorksPage() {

  return (
    <>
      <h2 className={s.title}>Works</h2>
      <div className={s.wrapper}>
        <WorksContainer works={work_data} />
      </div>
    </>
  )
}
