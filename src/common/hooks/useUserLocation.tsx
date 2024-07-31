import {useState} from 'react';
import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';

const useUserLocation = () => {
  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [isError, setIsError] = useState<GeolocationError | null>(null);

  const getUserLocation = async (foo: any) => {
    const hasPermission = foo();

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
  };

  return {location, getUserLocation};
};

export default useUserLocation;
