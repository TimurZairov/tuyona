import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../theme/theme';

const RailSelected = () => {
  return <View style={styles.root} />;
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 4,
    backgroundColor: COLORS.blueColor,
    borderRadius: 2,
  },
});
