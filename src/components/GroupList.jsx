import React, {useEffect, useState} from 'react'
import PopupAddItem from '../components/PopupAddItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemGroup, fetchGroups } from '../redux/actions/groups'
import GroupItem from './GroupItem'

const GroupList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGroups())
  }, [])

  const deleteItem = (id) => {
    dispatch(deleteItemGroup(id))
  }
  
  const groups = useSelector(state => state.groups)

  const updateStateGroup = () => {
    // setGroups(JSON.parse(localStorage.getItem('groups')))
  }

  return (
    <>
      <PopupAddItem updateStateGroup={updateStateGroup} />
      <ul className="group-list">
        {groups.map(group => <GroupItem deleteItem={deleteItem} group={group} key={group.id} />)}
      </ul>
    </>
  )
}

export default GroupList