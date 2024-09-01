import {BASE_URL} from '../../config/config';

//login & registration api
export const authApiController = async (
  endpoint: string,
  method: string,
  data: {
    username: string | undefined;
    password: string | undefined;
    lastName?: string;
    firsName?: string;
    password2?: string;
  },
) => {
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response) {
      throw new Error('Регистрация не удалась, попробуйте снова!');
    }

    const generatedToken = await response.json();
    return generatedToken;
  } catch (error) {
    console.log('authApiController error', error);
    return error;
  }
};
