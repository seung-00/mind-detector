import * as actions from './actions';
import * as types from './types';

const initialState: types.PostTestState = {
  postStatus: {
    loading: false,
    error: null,
  },
};

const createStudy = (
  state: types.PostTestState = initialState,
  action: types.PostTestAction
) => {
  switch (action.type) {
    case actions.POST_TEST:
      return {
        ...state,
        postStatus: {
          loading: true,
          error: null,
        },
      };
    case actions.POST_TEST_SUCCESS:
      return {
        ...state,
        postStatus: {
          loading: false,
          error: null,
        },
      };
    case actions.POST_TEST_ERROR:
      return {
        ...state,
        postStatus: {
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default createStudy;
