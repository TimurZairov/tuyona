import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../theme/theme';

interface ITitle {
  title: string;
}

const ScrollButton = ({title}: ITitle) => {
  return (
    <View style={styles.btn}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ScrollButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.mainColor,
    borderRadius: 100,
    paddingHorizontal: 40,
    paddingVertical: SIZES.xsmall,
    marginRight: 8,
  },
  title: {
    fontSize: SIZES.h5.md,
    fontWeight: '600',
  },
});
