import {Pressable, StyleSheet, View, Text, Image} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import useUserLocation from '../../common/hooks/useUserLocation';
import CustomMarker from '../../components/CustomMarker/CustomMarker';
import {requestLocationPermission} from '../../common/premissions/premissions';
import {useAppSelector} from '../../providers/redux/type';

import {useAppContext} from '../../providers/context/context';
import {COLORS, width} from '../../theme/theme';
import Charactiristick from '../../components/Charactiristick/Characteristic';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  const {getUserLocation} = useUserLocation();
  const mapRef = useRef<MapView>(null);
  const [location, setLocation] = useState(null);
  // const {language} = useAppContext();
  // const {serviceProvider} = useAppSelector(state => state.serviceProvider);
  const [info, setInfo] = useState(null);

  const userLocation = () => {
    console.log(location);
    if (!location) {
      mapRef.current?.animateToRegion(
        {
          longitude: 41.307244,
          latitude: 69.251523,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        2000,
      );
    }
    mapRef.current?.animateToRegion(
      {
        longitude: location?.coords.longitude,
        latitude: location?.coords.latitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      2000,
    );
  };

  const getProviderInfo = async (item: any) => {
    setInfo(item);
    console.log(info);
  };

  const resetInfo = e => {
    setInfo(null);
  };

  useEffect(() => {
    (async () => {
      const isGranted = await getUserLocation();
      if (!isGranted) {
        return;
      }
      Geolocation.getCurrentPosition(
        pos => {
          setLocation(pos);
        },
        error => {
          console.error('Error retrieving location:', error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    })();
  }, []);

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        // onMapReady={() => userLocation()}
        ref={mapRef}
        region={{
          latitude: location?.coords.latitude || 41.307244,
          longitude: location?.coords.longitude || 69.251523,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onPress={resetInfo}>
        {/* {serviceProvider && serviceProvider.length > 0
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
          : null} */}
      </MapView>
      {/* {info && (
        <View style={styles.modal}>
          <Image
            source={{uri: info?.photos[0]?.photo}}
            style={{width: 80, height: 80, borderRadius: 40}}
          />
          <Text style={{fontSize: 18, marginTop: 10}}>{info?.name}</Text>
          <Text style={{fontSize: 14, marginTop: 10}}>
            {info?.short_description}
          </Text>
          <View
            style={{
              marginVertical: 18,
              padding: 10,
              borderWidth: 1,
              borderColor: COLORS.grayColor,
              borderRadius: 16,
            }}>
            {info?.characteristics?.map((item, index) => {
              return (
                <Charactiristick
                  key={item?.title}
                  serviceProvider={item}
                  index={index}
                  length={info?.characteristics?.length}
                />
              );
            })}
          </View>
        </View>
      )} */}
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

    backgroundColor: COLORS.mainColor,
    bottom: 16,
    padding: 10,
    borderRadius: 10,
  },
});

{
  /* <UrlTile
          urlTemplate="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          zIndex={9090}
        /> */
}
{
  /* <LocalTile
          pathTemplate="https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          tileSize={512}
          zIndex={999}
        /> */
}
