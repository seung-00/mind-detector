import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import test from './test';

const rootReducer = combineReducers({ test });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([]);
}
