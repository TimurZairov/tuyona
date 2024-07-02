import axios from 'axios';
import {BASE_URL} from '../../config/config';

//login & registration

export const authApiController = async (
  endpoint: string,
  method: string,
  userData: {username: string; password: string},
) => {
  console.log(endpoint, method, userData);
  console.log(`${BASE_URL}/${endpoint}`);
  try {
    const user = await axios({
      method,
      url: `${BASE_URL}/${endpoint}`,
      data: userData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!user) {
      throw new Error('error authApiController');
    }
    return user;
  } catch (error) {
    console.log('Login error', error);
  }
};
