import {BASE_URL} from '../config/config';

export const postMethodApi = async (
  endpoint: string,
  data: Object,
  token: string,
) => {
  console.log(endpoint, token);
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log('postMethodApi', error);
  }
};
