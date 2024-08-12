import {Pressable, StyleSheet, View, Text, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import useUserLocation from '../../common/hooks/useUserLocation';
import CustomMarker from '../../components/CustomMarker/CustomMarker';
import {requestLocationPermission} from '../../common/premissions/premissions';
import {useAppSelector} from '../../providers/redux/type';

import {getMethodApi} from '../../common/getMethodApi';
import {useAppContext} from '../../providers/context/context';
import {COLORS, height, width} from '../../theme/theme';

const MapScreen = () => {
  const {getUserLocation, location} = useUserLocation();
  const mapRef = useRef<MapView | null>(null);
  const {language} = useAppContext();
  const {serviceProvider} = useAppSelector(state => state.serviceProvider);
  const [info, setInfo] = useState(null);

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
        1000,
      );
    }
  }, []);

  const getProviderInfo = async (item: any) => {
    console.log(item);
    if (!item) {
      setInfo(null);
      return;
    }
    setInfo(item);
  };

  const resetInfo = e => {
    setInfo(null);
  };

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
        zoomControlEnabled
        onPress={resetInfo}>
        {serviceProvider && serviceProvider.length > 0
          ? serviceProvider.map(item => {
              return (
                <Marker
                  key={item?.id}
                  coordinate={{
                    latitude: Number(item?.latitude) || 0,
                    longitude: Number(item?.longitude) || 0,
                  }}
                  onPress={() => getProviderInfo(item)}>
                  <View>
                    <CustomMarker name={item?.name} image={item.logo} />
                  </View>
                </Marker>
              );
            })
          : null}
      </MapView>
      {info && (
        <View style={styles.modal}>
          <Image
            source={{uri: info?.photos[0]?.photo}}
            style={{width: 80, height: 80, borderRadius: 40}}
          />
          <Text style={{fontSize: 18, marginTop: 10}}>{info?.name}</Text>
          <Text style={{fontSize: 14, marginTop: 10}}>
            {info?.short_description}
          </Text>
        </View>
      )}
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
  modal: {
    position: 'absolute',
    width: width - 16,
    height: height / 4,
    backgroundColor: COLORS.mainColor,
    bottom: 16,
    padding: 10,
    borderRadius: 10,
  },
});
