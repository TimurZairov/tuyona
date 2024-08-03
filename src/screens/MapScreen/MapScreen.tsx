import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import useUserLocation from '../../common/hooks/useUserLocation';
import CustomMarker from '../../components/CustomMarker/CustomMarker';
import {requestLocationPermission} from '../../common/premissions/premissions';
import {useAppSelector} from '../../providers/redux/type';

const MapScreen = () => {
  const {getUserLocation, location} = useUserLocation();
  const mapRef = useRef<MapView | null>(null);
  const {serviceProvider} = useAppSelector(state => state.serviceProvider);

  useEffect(() => {
    getUserLocation(requestLocationPermission);
    if (location) {
      mapRef?.current?.animateToRegion(
        {
          latitude: location?.coords?.latitude,
          longitude: location?.coords?.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        2000,
      );
    }
  }, []);

  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        zoomTapEnabled
        zoomEnabled
        cameraZoomRange={{
          minCenterCoordinateDistance: 0,
          maxCenterCoordinateDistance: 20,
        }}
        ref={mapRef}
        region={{
          latitude: location?.coords.latitude || 37.78825,
          longitude: location?.coords.longitude || -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        zoomControlEnabled>
        {serviceProvider && serviceProvider.length > 0
          ? serviceProvider.map(item => {
              return (
                <Marker
                  key={item?.id}
                  coordinate={{
                    latitude: Number(item?.latitude) || 0,
                    longitude: Number(item?.longitude) || 0,
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
