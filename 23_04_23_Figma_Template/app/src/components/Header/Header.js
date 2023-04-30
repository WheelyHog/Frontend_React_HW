import { NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal'
import s from './Header.module.css'

export default function Header({ active, setActive, menuActive, showMobileMenu }) {


  return (
    <div className={s.wrapper}>
      <ul className={s.menu_list}>
        <li><NavLink to='/' className={s.menu_item}>Home</NavLink></li>
        <li><NavLink to='/works' className={s.menu_item}>Works</NavLink></li>
        <li><NavLink to='/blog' className={s.menu_item} >Blog</NavLink></li>
        <li><p className={s.menu_item} onClick={() => setActive(!active)}>Contact</p></li>
      </ul>
      <Modal active={active} setActive={setActive} />
      <div className={menuActive ? s.burger_active : s.burger} onClick={showMobileMenu}>
        <div className={s.burger_line}></div>
        <div className={s.burger_line}></div>
        <div className={s.burger_line}></div>
      </div>
    </div>
  )
}
