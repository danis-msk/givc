import React, {useState, useEffect, useRef} from 'react'
import classNames from 'classnames'

const PopupAddItem = ({updateStateStudents = ()=>{}, updateStateGroup = ()=>{}}) => {

  const [visible, setVisible] = useState(false)
  const [pageStudents, setPageStudents] = useState(false)

  const popupRef = useRef()
  const studentRef = useRef()
  const groupRef = useRef()

  useEffect(() => {

    // добавить класс header__item--active при загрузке страницы
    // if (document.querySelector('.group-list')) {
    //   document.querySelector('.header__item--group-list').classList.add('header__item--active')
    // }
    // if (document.querySelector('.students-list')) {
    //   document.querySelector('.header__item--students-list').classList.add('header__item--active')
    // }

    // открыть попап при клике на кнопку "Добавить"
    document.querySelector('.button-add-item').addEventListener('click', toggleVisiblePopup)
    // скрыть папап при клике вне его
    document.body.addEventListener('click', handleOutsideClick)

    return clearUseEffect
  }, [])

  useEffect(() => {
    // проверка страницы для добавляения input для списка студентов
    // if (document.querySelector('.header__item--active').classList.contains('header__item--students-list')) {
    //   setPageStudents(true)
    // }
  })
  
  // очистка событий
  const clearUseEffect = () => {
    document.querySelector('.button-add-item').removeEventListener('click', toggleVisiblePopup)
    document.body.removeEventListener('click', handleOutsideClick)
  }

  // показать/скрыть попап
  let toggleVisiblePopup = () => {
    setVisible(!visible)
  }

  // скрыть папап при клике вне его
  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())
    if (!path.includes(popupRef.current) && !path.includes(document.querySelector('.button-add-item'))) {
      setVisible(false)
    }
  }


  // добавить пункт в список
  const addItem = (event) => {
    event.preventDefault()
    // const student = studentRef.current ? studentRef.current.value.trim() : null
    // const group = groupRef.current.value.trim()
    // let idGroup
    // let idStudent

    // if ((!student && student !== null) || !group) {
    //   return alert('Введите данные')
    // }

    // let groups = JSON.parse(localStorage.getItem('groups'))

    // if (groups !== null && groups.length) {
    //   groups.forEach(el => {
    //     if (el['name'] === group) {
    //       idGroup = el['id']
    //     }
    //   })
    //   if (idGroup === undefined) {
    //     idGroup = groups[groups.length-1]['id'] + 1
    //     groups = [
    //       ...groups,
    //       {'id': idGroup, 'name': group}
    //     ]
    //   }
    // } else {
    //   idGroup = 0
    //   groups = [
    //     {'id': idGroup, 'name': group}
    //   ]
    // }

    // localStorage.setItem('groups', JSON.stringify(groups))

    // if (student !== null) {
    //   let students = JSON.parse(localStorage.getItem('students'))
    //   if (students != null && students.length) {
    //     idStudent = students[students.length-1]['id'] + 1
    //     students = [
    //       ...students,
    //       {'id': idStudent, 'name': student, 'id_group': idGroup}
    //     ]
    //   } else {
    //     students = [
    //       {'id': 0, 'name': student, 'id_group': idGroup}
    //     ]
    //   }

    //   localStorage.setItem('students', JSON.stringify(students))
    // }
    // updateStateStudents()
    // updateStateGroup()
    // toggleVisiblePopup()
    // studentRef.current && (studentRef.current.value = '')
    // groupRef.current.value = ''
  }
  
  

  return (
    <form ref={popupRef} className={classNames('popup-addItem', {
      'popup-addItem--active': visible
    })}>
      {pageStudents && <input ref={studentRef} type="text" placeholder="Введите имя студента" className="popup-addItem__input"/>}
      <input ref={groupRef} type="text" placeholder="Введите название группы" className="popup-addItem__input"/>
      <div className="popup-addItem__button-wrapper">
        <button className="popup-addItem__button popup-addItem__button--ok" onClick={addItem}>Добавить</button>
        <div className="popup-addItem__button popup-addItem__button--cancel" onClick={toggleVisiblePopup}>Отменить</div>
      </div>
    </form>
  )
}

export default PopupAddItem