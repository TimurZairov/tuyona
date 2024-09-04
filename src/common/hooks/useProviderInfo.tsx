import {useEffect, useState} from 'react';
import {Providers, Service} from '../../types/types';
import {getMethodApi} from '../getMethodApi';
import {useAppContext} from '../../providers/context/context';

const useProviderInfo = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [serviceProvider, setServiceProvider] = useState<Providers | null>(
    null,
  );
  const [services, setServices] = useState<Service[] | null>(null);
  const {language} = useAppContext();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const resultInfo = await getMethodApi(
        '/service-providers/' + id,
        language,
      );
      const resultServices = await getMethodApi(
        '/service-providers/' + id + '/services',
        language,
      );

      if (!resultInfo || !resultServices) {
        throw new Error('Ошибка');
      }
      setServiceProvider(resultInfo);
      setServices(resultServices);
      setLoading(false);
    })();
  }, [id, language]);

  return {loading, serviceProvider, services};
};

export default useProviderInfo;
