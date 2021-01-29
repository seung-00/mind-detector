import postTest, { postTestSaga } from './post-test';
import test from './test';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ test, postTest });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postTestSaga()]);
}
