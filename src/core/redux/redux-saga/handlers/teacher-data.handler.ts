import { call, put } from 'redux-saga/effects'
import { getAllTeachers } from '../../../services/api/employee/get-all-teachers'
import { GetEmployeeDataType } from '../../../utils/types/data-types/data-types.utils'
import { setTeacherData } from '../../redux-store/data/teacher/teacher.Slice'

export function* handleGetTeacherData() {
  try {
    const response: GetEmployeeDataType[] = yield call(getAllTeachers)
    const data = response
    yield put(setTeacherData(data))
  } catch (error) {
    console.log(error)
  }
}
