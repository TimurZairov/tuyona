import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';
import {getCartAction} from '../../providers/redux/actions/cartAction';

const useMainData = () => {
  const [isDone, setIsDone] = useState(false);

  const dispatch = useAppDispatch();
  const {accessToken, language} = useAppContext();

  useEffect(() => {
    if (accessToken) {
      dispatch(getCartAction({accessToken: accessToken.toString(), language}));
      setIsDone(true);
    }

    return () => {
      setIsDone(false);
    };
  }, [accessToken]);
  return {isDone};
};

export default useMainData;
