import React, {useState} from 'react'
import PopupAddItem from '../components/PopupAddItem'

const StudentsList = ({deleteItem}) => {
  let [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')))
  let [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')))

  const updateStateStudents = () => {
    setStudents(JSON.parse(localStorage.getItem('students')))
    setGroups(JSON.parse(localStorage.getItem('groups')))
  }

  if (!students) students = []
  if (!groups) groups = []

  const studentsForNode = students.map(student => {
    const group = groups.filter(group => student['id_group'] === group['id'])
    const groupName = (group.length && group[0]['name']) || 'Без группы'
    return {
      'id': student['id'],
      'name': `${student['name']} - ${groupName}`
    }
  })

  return (
    <>
      <PopupAddItem updateStateStudents={updateStateStudents} />
      <ul className="students-list">
        {studentsForNode.map(el => (
          <li className="students-item item" data-id={el['id']} key={el + Math.random()}>
            <span className="item__name">{el['name']}</span>
            <span className="item__delete" onClick={() => {deleteItem('students', el['id']); updateStateStudents()}}>Удалить</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default StudentsList