import React, {useState} from 'react'
import PopupAddItem from '../components/PopupAddItem'

const GroupList = ({deleteItem}) => {

  let [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')))
  
  if (!groups) groups = []

  const updateStateGroup = () => {
    setGroups(JSON.parse(localStorage.getItem('groups')))
  }

  return (
    <>
      <PopupAddItem updateStateGroup={updateStateGroup} />
      <ul className="group-list">
        {groups.map(group => {
          return <li className="group-item item" data-id={group['id']} key={group['id']}>
            <span className="item__name">{group['name']}</span>
            <span className="item__delete" onClick={() => {deleteItem('groups', group['id']); updateStateGroup()}}>Удалить</span>
          </li>
        })}
      </ul>
    </>
  )
}

export default GroupList