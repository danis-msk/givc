import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header className="header">
      <NavLink className="header__item header__item--group-list" activeClassName="header__item--active" to="/" exact>
        Список групп
      </NavLink>
      <NavLink className="header__item header__item--students-list" activeClassName="header__item--active" to="/students-list" exact>
        Список студентов
      </NavLink>
    </header>
  )
}

export default Header