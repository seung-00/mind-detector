import * as types from './types';
import axios from 'axios';

export async function postTestApi(form: types.TestForm) {
  console.log(`post 되는 데이터`);
  console.log(form);
  const privacyObj = form.privacy;
  const answersObj = form.answers;
  const data = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
    privacy: privacyObj,
    answers: answersObj,
  };
  const response = await axios.post(
    'https://api.minddetector.me/predict',
    data
  );
  console.log('reponse 데이터 ->');
  console.log(response);
  return response.data;
}
