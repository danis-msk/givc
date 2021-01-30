import React from 'react'

const GroupItem = ({ group, deleteItem }) => (
  <li className="group-item item" data-id={group.id} >
    <span className="item__name">{group.name}</span>
    <span className="item__delete" onClick={() => {deleteItem(group.id)}}>Удалить</span>
  </li>
)

export default GroupItem