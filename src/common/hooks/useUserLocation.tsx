import {useState} from 'react';
import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {useAppDispatch} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';
import {getServices} from '../../providers/redux/actions/servicesProvider';
import {Platform} from 'react-native';
import {requestLocationPermission} from '../premissions/premissions';

const useUserLocation = () => {
  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [isError, setIsError] = useState<GeolocationError | null>(null);
  const {language} = useAppContext();
  const dispath = useAppDispatch();

  const getUserLocation = async () => {
    const hasPermission = await requestLocationPermission();
    return hasPermission;
    // await dispath(getServices({language}));
  };

  return {getUserLocation, location};
};

export default useUserLocation;
