import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

function Header() {

  return(
    <div className={css.header}>
      <NavLink to="/goit-react-hw-05-movies/" className={({isActive})=>isActive?css.active:css.link }> Home </NavLink>
      <NavLink to="/goit-react-hw-05-movies/movies" className={({isActive})=>isActive?css.active:css.link }>  Search Movies </NavLink>
    </div>
  )
}

export default Header;
