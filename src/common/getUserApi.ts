import {BASE_URL} from '../config/config';
import {User} from '../types/types';

export const getUser = async (token: string) => {
  try {
    const response = await fetch(BASE_URL + '/users/me/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response) {
      return;
    }

    const user: User = await response.json();
    return user;
  } catch (error) {
    console.log('get user', error);
  }
};
