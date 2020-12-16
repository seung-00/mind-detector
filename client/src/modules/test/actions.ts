import * as types from './types';

export const INITIALIZE_FORM = 'test/INITIALIZE_FORM' as const;
export const SAVE_PRIVACY = 'test/SAVE_PRIVACY' as const;
export const SAVE_TEXTS = 'test/SAVE_TEXTS' as const;

export const initializeForm = () => ({
  type: INITIALIZE_FORM,
});

export const savePrivacy = (privacyData: types.PrivacyForm) => ({
  type: SAVE_PRIVACY,
  payload: privacyData,
});

export const saveText = (textData: types.TextForm) => ({
  type: SAVE_TEXTS,
  payload: textData,
});
