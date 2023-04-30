import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MobileMenu.module.css'

export default function MobileMenu({ active, setActive, menuActive, setMenuActive }) {
  return (
    <div className={menuActive ? s.mob_menu_active : s.mob_menu}>
      <ul className={s.mob_menu_list}>
        <li className={s.mob_menu_item} onClick={() => setMenuActive(!menuActive)}><NavLink to='/'>Home</NavLink></li>
        <li className={s.mob_menu_item} onClick={() => setMenuActive(!menuActive)}><NavLink to='/works'>Works</NavLink></li>
        <li className={s.mob_menu_item} onClick={() => setMenuActive(!menuActive)}><NavLink to='/blog'>Blog</NavLink></li>
        <li className={s.mob_menu_item} onClick={() => {
          setMenuActive(!menuActive)
          setActive(!active)
        }
        }>Contact</li>
      </ul>
    </div>
  )
}
