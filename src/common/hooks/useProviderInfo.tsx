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
      try {
        const resultInfo = await getMethodApi(
          '/service-providers/' + id,
          language,
        );
        const resultServices = await getMethodApi(
          '/service-providers/' + id + '/services',
          language,
        );

        setServiceProvider(resultInfo);
        setServices(resultServices);
      } catch (error) {
        console.log(error, 'useProviderInfo');
      } finally {
        setLoading(false);
      }
    })();
  }, [id, language]);

  return {loading, serviceProvider, services};
};

export default useProviderInfo;
