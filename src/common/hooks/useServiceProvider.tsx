import {useState} from 'react';
import {useAppContext} from '../../providers/context/context';
import {getMethodApi} from '../getMethodApi';

const useServiceProvider = async () => {
  const [isLoading, setLoading] = useState(false);
  const {language} = useAppContext();

  const serviceProvider = await getMethodApi('/services/', language);
  console.log(JSON.stringify(serviceProvider, null, 2));
  return;
};

export default useServiceProvider;
