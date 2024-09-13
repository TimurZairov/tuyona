import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../providers/redux/type';
import {homeDataAction} from '../../providers/redux/actions/homeDataAction';
import {useAppContext} from '../../providers/context/context';

const useMainScreenRequests = () => {
  const [mainLoading, setMainLoading] = useState(false);
  const {language, accessToken} = useAppContext();
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      (async () => {
        setMainLoading(true);
        const res = await dispatch(
          homeDataAction({
            endpoint: '/homepage/',
            language,
            token: accessToken,
          }),
        );
      })();
    } catch (error) {
      console.log(error);
    } finally {
      setMainLoading(false);
    }
  }, []);
  return {mainLoading};
};

export default useMainScreenRequests;
