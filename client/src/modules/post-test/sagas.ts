import { StateTypes } from './reducer';
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { initializeForm } from './../test/actions';
import * as actions from './actions';
import { postTestApi } from './api';

import { call, put, takeLatest } from 'redux-saga/effects';

function* postTestFuncSaga(action: ReturnType<typeof actions.postTest>) {
  try {
    yield put(initializeForm()); // clear datas in test module
    // $ExpectType any
    const data: StateTypes = yield call(postTestApi, action.payload);
    yield put(actions.postTestSuccess());
    yield put(actions.fetchLevel(data.level));
    yield put(actions.fetchCenters(data.centers));
  } catch (e) {
    yield put(actions.postTestError(e));
  }
}
export function* postTestSaga() {
  yield takeLatest(actions.POST_TEST, postTestFuncSaga);
}
