import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export default function Header() {
  return (
    <div className={s.wrapper}>
      <ul className={s.menu_list}>
        <li><NavLink to='/' className={s.menu_item}>Home</NavLink></li>
        <li><NavLink to='/works' className={s.menu_item}>Works</NavLink></li>
        <li><NavLink to='/blog' className={s.menu_item} >Blog</NavLink></li>
        <li><NavLink to='/contact' className={s.menu_item}>Contact</NavLink></li>
      </ul>
    </div>
  )
}
