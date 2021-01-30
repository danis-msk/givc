import { takeEvery, put, call } from 'redux-saga/effects'
import { putGroups } from '../actions/groups'
import { putStudents } from '../actions/students'
import { FETCH_STUDENTS } from '../types'

export function* watchLoadStudents() {
  yield takeEvery(FETCH_STUDENTS, workerGetStudents)
}

function* workerGetStudents() {
  try {
    const payload = yield call(fetchStudents)
    yield put(putStudents(payload.students))
    yield put(putGroups(payload.groups))
  } catch (e) {
    console.error(e)
  }
}

const fetchStudents = async () => {
  const res = await fetch('http://localhost:3000/students.json')
  return await res.json()
}