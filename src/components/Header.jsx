import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  // переключатель кнопок header
  const toggleHeaderItem = (event) => {
    if (event.target.classList.contains('header__item') &&
    !event.target.classList.contains('header__item--active')) {
      const headerItems = document.querySelectorAll('.header__item')
      headerItems.forEach(item => {
        item.classList.remove('header__item--active')        
      })
      event.target.classList.add('header__item--active')
    }
  }

  return (
    <header className="header" onClick={toggleHeaderItem}>
      <Link className="header__item header__item--group-list" to="/">
        Список групп
      </Link>
      <Link className="header__item header__item--students-list" to="/students-list">
        Список студентов
      </Link>
    </header>
  )
}

export default Header