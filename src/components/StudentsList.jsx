import React, {useEffect, useState} from 'react'
import PopupAddItem from '../components/PopupAddItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents, deleteItemStudent } from './../redux/actions/students'
import StudentsItem from './StudentsItem'

const StudentsList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStudents())
  }, [])

  const deleteItem = (id) => {
    dispatch(deleteItemStudent(id))
  }

  const students = useSelector(state => state.students)
  const groups = useSelector(state => state.groups)

  const updateStateStudents = () => {
    // setStudents(JSON.parse(localStorage.getItem('students')))
    // setGroups(JSON.parse(localStorage.getItem('groups')))
  }

  const studentsForNode = students.map(student => {
    const group = groups.filter(group => student['id_group'] === group['id'])
    const groupName = (group.length && group[0]['name']) || 'Без группы'
    return {
      'id': student['id'],
      'name': `${student['name']} - ${groupName}`
    }
  })

  console.log(studentsForNode)

  return (
    <>
      <PopupAddItem updateStateStudents={updateStateStudents} />
      <ul className="students-list">
        {studentsForNode.map(el => <StudentsItem student={el} deleteItem={deleteItem} key={el + Math.random()} />)}
      </ul>
    </>
  )
}

export default StudentsList