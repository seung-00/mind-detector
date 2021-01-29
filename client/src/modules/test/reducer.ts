import * as actions from './actions';
import * as types from './types';

const initialForm = {
  privacy: {
    age: '',
    sex: '',
    province: '',
    job: '',
    city: '',
  },
  answers: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
    answer9: '',
    answer10: '',
  },
};

const study = (
  state: types.TestForm = initialForm,
  action: types.FormAction
) => {
  switch (action.type) {
    case actions.SAVE_PRIVACY:
      return {
        ...state,
        privacy: {
          sex: action.payload.sex,
          age: action.payload.age,
          job: action.payload.job,
          province: action.payload.province,
          city: action.payload.city,
        },
      };
    case actions.SAVE_ANSWER:
      const pageKey = action.payload.pageKey;
      const answer = action.payload.answer;
      return {
        ...state,
        answers: {
          ...state.answers,
          [pageKey]: answer,
        },
      };
    case actions.INITIALIZE_FORM:
      return initialForm;
    default:
      return state;
  }
};

export default study;
