import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'sk.eyJ1IjoidGltdXI4NSIsImEiOiJjbTFpZ25lZDQwbzduMm1zZXVrYzI5bHNiIn0.2mwmGnNWv9tBjonrtmY0kA',
);

const MapBoxScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default MapBoxScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});
