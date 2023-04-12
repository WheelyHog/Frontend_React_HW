import s from './Header.module.css'
import logo from '../../assets/images/hog_logo.png'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

export default function Header({ cart_count }) {
  return (
    <div className={s.header_wrapper}>
      <div className={s.logo}>
        <img src={logo} alt={logo} />
        <h4>FakeStore</h4>
      </div>
      <div className={s.nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/cart'>
          <HiOutlineShoppingBag className={s.cart} />
          <div className={cart_count === 0 ? s.cart_count_empty : s.cart_count_full} >{cart_count}</div>
        </NavLink>
      </div>
    </div>
  )
}
