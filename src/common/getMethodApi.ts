import {BASE_URL} from '../config/config';

export const getMethodApi = async (
  endpoint: string,
  language: string,
  token?: string | undefined,
) => {
  console.log(endpoint, language);
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-language': language,
        Authorization: token ? 'Bearer ' + token : '',
      },
    });

    return await response.json();
  } catch (error) {
    console.log('getMethodApi', error);
  }
};
