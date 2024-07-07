import {BASE_URL} from '../config/config';

export const getMethodApi = async (
  endpoint: string,
  language: string,
  token?: string | undefined,
) => {
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token ? 'Bearer ' + token : '',
        'accept-Language': language,
      },
    });
    return await response.json();
  } catch (error) {
    console.log('getMethodApi', error);
  }
};
