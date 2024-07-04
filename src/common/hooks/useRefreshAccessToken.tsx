import {useEffect} from 'react';
import {useAppContext} from '../../providers/context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../../providers/redux/type';
import {BASE_URL} from '../../config/config';
import {logOutUser} from '../../providers/redux/slices/userSlice';

const useRefreshAccessToken = () => {
  const {setAccessToken} = useAppContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      //check is refresh token is in storage
      try {
        const isRefreshToken = await AsyncStorage.getItem('refreshToken');
        console.log(isRefreshToken);

        if (!isRefreshToken) {
          console.log('user not authorized');
          dispatch(logOutUser());
          return;
        }
        //get refreshed token and access token
        const getNewToken = await fetch(BASE_URL + '/users/token/refresh/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: isRefreshToken,
        });

        if (!getNewToken) {
          //ste user null user have to login or register
          dispatch(logOutUser());
          return;
        }

        const newToken = await getNewToken.json();
        //save refreshed token
        await AsyncStorage.setItem('refreshToken', newToken?.refreshToken);
        setAccessToken(newToken?.accessToken);
      } catch (error) {
        console.log('useRefreshToken error', error);
      }
    })();
  }, []);
};

export default useRefreshAccessToken;
