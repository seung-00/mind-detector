import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({});

export default rootReducer;

// useSelector 쓸 때 필요
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([]);
}
