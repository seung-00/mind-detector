import * as actions from './actions';
import * as types from './types';

// 초기 상태 선언
const initialForm: types.TestForm = {
  privacy: {
    age: 0,
    sex: '',
    regidences: '',
  },
  texts: {
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    text5: '',
    text6: '',
    text7: '',
    text8: '',
    text9: '',
    text10: '',
  },
};

// 리듀서 작성
function study(
  state: types.TestForm = initialForm,
  action: types.FormAction
): types.TestForm {
  switch (action.type) {
    case actions.SAVE_PRIVACY:
      const number_age = Number(action.payload.age);
      if (
        number_age < 1 ||
        number_age > 99 ||
        !action.payload.sex ||
        !action.payload.regidences ||
        action.payload.regidences === '선택'
      ) {
        alert('분석을 위해 개인정보 기입을 부탁드립니다.');
        return { ...state };
      }
      return {
        ...state,
        privacy: {
          sex: action.payload.sex,
          regidences: action.payload.regidences,
          age: number_age,
        },
      };
    case actions.SAVE_TEXTS:
      return {
        ...state,
        texts: { ...action.payload },
      };
    case actions.INITIALIZE_FORM:
      return initialForm;
    default:
      return state;
  }
}

export default study;
