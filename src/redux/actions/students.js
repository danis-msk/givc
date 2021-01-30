import { FETCH_STUDENTS, CREATE_STUDENT, PUT_STUDENTS, DELETE_ITEM_STUDENT } from '../types'

export const fetchStudents = () => ({
  type: FETCH_STUDENTS
})

export const putStudents = (students) => ({
  type: PUT_STUDENTS,
  payload: students
})

export const createStudent = (student) => ({
  type: CREATE_STUDENT,
  payload: student
})

export const deleteItemStudent = (id) => ({
  type: DELETE_ITEM_STUDENT,
  payload: id
})