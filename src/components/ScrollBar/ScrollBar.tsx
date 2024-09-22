import {StyleSheet, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {COLORS, width} from '../../theme/theme';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

const ScrollBar: FC<{scrollLength: number}> = ({scrollLength}) => {
  const scrollWidth = useSharedValue(0);

  useEffect(() => {
    scrollWidth.value = withTiming(scrollLength, {duration: 300});
  }, [scrollLength]);

  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <Animated.View style={[styles.progress, {width: scrollWidth}]} />
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
    width: 0,
    backgroundColor: COLORS.blueColor,
    borderRadius: 100,
  },
});
