import { PUT_GROUPS, DELETE_ITEM_GROUP } from '../types'

const initialState = []

export const groups = (state = initialState, action) => {
  switch (action.type) {
    case PUT_GROUPS:
      return [...action.payload]
    case DELETE_ITEM_GROUP:
      return [...state.filter(item => item.id !== action.payload)]

    default: return state
  }
}