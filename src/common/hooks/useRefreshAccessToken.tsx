import {useEffect, useState} from 'react';
import {useAppContext} from '../../providers/context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../../providers/redux/type';
import {BASE_URL} from '../../config/config';
import {logOutUser, setUser} from '../../providers/redux/slices/userSlice';
import {getUser} from '../getUserApi';

const useRefreshAccessToken = () => {
  const {setAccessToken} = useAppContext();
  const dispatch = useAppDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      //check is refresh token in storage
      try {
        const isRefreshToken = await AsyncStorage.getItem('refreshToken');

        if (!isRefreshToken) {
          console.log('user not authorized');
          dispatch(logOutUser());
          return;
        }
        // //get refreshed token and access token
        const getNewToken = await fetch(BASE_URL + '/users/token/refresh/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({refresh: isRefreshToken}),
        });

        if (getNewToken.status !== 200) {
          //ste user null user have to login or register
          await AsyncStorage.removeItem('refreshToken');
          dispatch(logOutUser());
          return;
        }

        const newToken = await getNewToken.json();
        if (!newToken && !newToken.access) {
          console.log('user not authorized');
          dispatch(logOutUser());
          return;
        }
        const isUser = await getUser(newToken?.access);
        if (!isUser) {
          console.log('user not authorized');
          dispatch(logOutUser());
          return;
        }
        dispatch(setUser(isUser));
        setAccessToken(newToken?.access);
      } catch (error) {
        console.log('useRefreshToken error', error);
      } finally {
        setIsReady(true);
      }
    })();

    return () => {
      setIsReady(false);
    };
  }, []);

  return {isReady};
};

export default useRefreshAccessToken;
