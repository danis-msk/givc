import React from 'react'

const StudentsItem = ({ student, deleteItem }) => (
  <li className="students-item item" data-id={student.id}>
    <span className="item__name">{student.name}</span>
    <span className="item__delete" onClick={() => {deleteItem(student.id)}}>Удалить</span>
  </li>
)

export default StudentsItem