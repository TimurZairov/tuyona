import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import useUserLocation from '../../common/hooks/useUserLocation';
import {BASE_URL} from '../../config/config';
import {useAppContext} from '../../providers/context/context';
import {providersDummy} from '../../data/slider';
import CustomMarker from '../../components/CustomMarker/CustomMarker';

const MapScreen = () => {
  const {getUserLocation, location} = useUserLocation();
  const {language} = useAppContext();
  const mapRef = useRef();

  const [providers, setProviders] = useState([]);

  const getAllProviders = async () => {
    try {
      const response = await fetch(BASE_URL + '/service-providers/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-language': language,
        },
      });
      if (!response) {
        return;
      }

      const res = await response.json();
      console.log(JSON.stringify(res.results, null, 2));
    } catch (error) {
      console.log('map screen', error);
    }
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      return true; // iOS permissions are requested in Info.plist
    }
    try {
      await getAllProviders();
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app requires access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  useEffect(() => {
    getUserLocation(requestLocationPermission);
  }, []);

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: location?.coords.latitude || 37.78825,
          longitude: location?.coords.longitude || -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        zoomControlEnabled>
        {providersDummy && providersDummy.length > 0
          ? providersDummy.map(item => {
              return (
                <Marker
                  key={item?.id}
                  coordinate={{
                    latitude: item?.latitude || 0,
                    longitude: item?.longitude || 0,
                  }}>
                  <View>
                    <CustomMarker name={item?.name} image={item.logo} />
                  </View>
                </Marker>
              );
            })
          : null}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    width: 150,
    height: 150,
  },
});
