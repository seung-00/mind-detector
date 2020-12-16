import * as actions from './actions';

// form 객체 타입 준비
export interface PrivacyForm {
  age: number;
  sex: string;
  regidences: string;
}
export interface TextForm {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
}

export interface TestForm {
  privacy: {
    age: number;
    sex: string;
    regidences: string;
  };
  texts: {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
    text7: string;
    text8: string;
    text9: string;
    text10: string;
  };
}

// 모든 액션 객체들에 대한 타입 준비
export type FormAction =
  | ReturnType<typeof actions.initializeForm>
  | ReturnType<typeof actions.savePrivacy>
  | ReturnType<typeof actions.saveText>;
