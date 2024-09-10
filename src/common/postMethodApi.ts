import {BASE_URL} from '../config/config';

export const postMethodApi = async (
  endpoint: string,
  data: string,
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
      body: JSON.stringify({service_provider: data}),
    });
    return await response.json();
  } catch (error) {
    console.log('postMethodApi', error);
  }
};
