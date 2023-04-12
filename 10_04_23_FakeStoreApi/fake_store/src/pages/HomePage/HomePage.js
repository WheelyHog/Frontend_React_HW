import React from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem'
import { categories } from '../../data/categories'
import s from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={s.homepage}>
      <h2>HomePage</h2>
      <div className={s.categories}>
        {categories.map(elem => <CategoryItem {...elem} key={elem.id} />)}
      </div>
    </div>
  )
}
