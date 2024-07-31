import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CustomMarker = ({name, image}: any) => {
  return (
    <View style={styles.markerContainer}>
      <Image
        source={{uri: image}}
        style={{
          width: 28,
          height: 28,
          borderRadius: 40,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    alignItems: 'center',
  },
  markerText: {
    color: '#333333',
    fontSize: 14,
  },
});
