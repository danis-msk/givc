import { FETCH_GROUPS, CREATE_GROUP, PUT_GROUPS, DELETE_ITEM_GROUP } from '../types'

export const fetchGroups = () => ({
  type: FETCH_GROUPS
})

export const putGroups = (groups) => ({
  type: PUT_GROUPS,
  payload: groups
})

export const createGroup = (group) => ({
  type: CREATE_GROUP,
  payload: group
})

export const deleteItemGroup = (id) => ({
  type: DELETE_ITEM_GROUP,
  payload: id
})