import * as types from './types';
import axios from 'axios';

export async function postTestApi(form: types.TestForm) {
  const privacyObj = form.privacy;
  const answersObj = form.answers;
  const data = {
    privacy: privacyObj,
    answers: answersObj,
  };

  const head = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };

  const response = await axios.post(
    'https://test.minddetector.me/testall',
    data,
    head
  );

  return response.data;
}
