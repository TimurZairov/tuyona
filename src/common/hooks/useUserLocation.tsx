import {useState} from 'react';
import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {useAppDispatch} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';
import {getServices} from '../../providers/redux/actions/servicesProvider';

const useUserLocation = () => {
  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [isError, setIsError] = useState<GeolocationError | null>(null);
  const {language} = useAppContext();
  const dispath = useAppDispatch();

  const getUserLocation = async (callBack: any) => {
    const hasPermission = callBack();
    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      pos => {
        setLocation(pos);
      },
      error => {
        setIsError(error);
        console.error('Error retrieving location:', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    await dispath(getServices({language}));
  };

  return {location, getUserLocation};
};

export default useUserLocation;
