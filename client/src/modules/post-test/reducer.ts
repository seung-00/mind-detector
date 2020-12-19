import * as actions from './actions';
import * as types from './types';

const initialState: types.PostTestState = {
  postStatus: {
    loading: false,
    success: false,
    error: null,
  },
};

const postTest = (
  state: types.PostTestState = initialState,
  action: types.PostTestAction
) => {
  switch (action.type) {
    case actions.POST_TEST:
      return {
        postStatus: {
          ...state.postStatus,
          loading: true,
        },
      };
    case actions.POST_TEST_SUCCESS:
      return {
        postStatus: {
          ...state.postStatus,
          loading: false,
          success: true,
        },
      };
    case actions.POST_TEST_ERROR:
      return {
        postStatus: {
          ...state.postStatus,
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default postTest;
