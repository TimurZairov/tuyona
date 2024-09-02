import React, {FC, memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/theme';

const THUMB_RADIUS_HIGH = 12;

const Thumb: FC<{name?: string}> = ({name}) => {
  return <View style={styles.rootHigh} />;
};

const styles = StyleSheet.create({
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 3,
    borderColor: COLORS.redColor,
    backgroundColor: '#ffffff',
  },
});

export default memo(Thumb);
