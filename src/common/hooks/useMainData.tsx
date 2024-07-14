import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';
import {getCartAction} from '../../providers/redux/actions/cartAction';
import {bannerAction} from '../../providers/redux/actions/bannerAction';

const useMainData = () => {
  const [isDone, setIsDone] = useState(false);
  const [banners, setBanners] = useState(false);

  const dispatch = useAppDispatch();
  const {accessToken, language} = useAppContext();

  useEffect(() => {
    if (accessToken) {
      dispatch(getCartAction({accessToken: accessToken.toString(), language}));
      setIsDone(true);
    }
    setIsDone(true);
    return () => {
      setIsDone(false);
    };
  }, [accessToken]);

  useEffect(() => {
    dispatch(bannerAction({language}));
    setBanners(true);
  }, []);

  return {isDone, banners};
};

export default useMainData;
