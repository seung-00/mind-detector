import * as actions from './actions';
import { postTestApi } from './api';

import { call, put, takeEvery } from 'redux-saga/effects';

function* postTestFuncSaga(action: ReturnType<typeof actions.postTest>) {
  try {
    const test = yield call(postTestApi, action.payload);
    console.log(test);
    // yield call([history, history.push], '/signin');
    yield put(actions.postTestSuccess());
  } catch (e) {
    yield put(actions.postTestError(e));
  }
}
export function* postTestSaga() {
  yield takeEvery(actions.POST_TEST, postTestFuncSaga);
}
