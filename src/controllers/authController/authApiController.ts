import {BASE_URL} from '../../config/config';

//login & registration
export const authApiController = async (
  endpoint: string,
  method: string,
  data: {
    username: string;
    password: string;
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

    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.log('Login error', error);
    return error;
  }
};
