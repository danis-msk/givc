import { PUT_STUDENTS, DELETE_ITEM_STUDENT } from '../types'

const initialState = []

export const students = (state = initialState, action) => {
  switch (action.type) {
    case PUT_STUDENTS:
      return [...action.payload]
    case DELETE_ITEM_STUDENT:
      return [...state.filter(item => item.id !== action.payload)]

    default: return state
  }
}