import { takeEvery, put, call } from 'redux-saga/effects'
import { putGroups } from '../actions/groups'
import { FETCH_GROUPS } from '../types'

export function* watchLoadGroups() {
  yield takeEvery(FETCH_GROUPS, workerGetGroups)
}

function* workerGetGroups() {
  try {
    const payload = yield call(fetchGroups)
    yield put(putGroups(payload))
  } catch (e) {
    console.error(e)
  }
}

const fetchGroups = async () => {
  const res = await fetch('http://localhost:3000/groups.json')
  return await res.json()
}