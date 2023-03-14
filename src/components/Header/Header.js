import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

function Header() {

  return(
    <div className={css.header}>
      <NavLink to="/" className={({isActive})=>isActive?css.active:css.link }> Home </NavLink>
      <NavLink to="/movies" className={({isActive})=>isActive?css.active:css.link }>  Search Movies </NavLink>
    </div>
  )
}

export default Header;
