import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, width} from '../../theme/theme';

const ScrollBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <View style={styles.progress} />
      </View>
    </View>
  );
};

export default ScrollBar;

const styles = StyleSheet.create({
  container: {
    width: width - 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  scroll: {
    width: width / 1.7,
    height: 14,
    backgroundColor: COLORS.grayColor,
    borderRadius: 7,
    overflow: 'hidden',
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: width / 3,
    backgroundColor: COLORS.blueColor,
    borderRadius: 100,
  },
});
