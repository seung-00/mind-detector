import * as types from './types';
import axios from 'axios';

export async function postTestApi(form: types.TestForm) {
  // console.log(form);
  const response = await axios.post('https://api.minddetector.me/predict', {
    form,
  });
  return response.data;
}
