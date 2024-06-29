import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../../theme/theme';

interface ITitle {
  category: {
    title: string;
    image: ImageSourcePropType | undefined;
  };
  food?: boolean;
}

const ScrollButton = ({category, food}: ITitle) => {
  return (
    <View style={[styles.btn, {marginRight: food ? 8 : 0}]}>
      <Image source={category.image} style={styles.image} />
      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
};

export default ScrollButton;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 8,
    // paddingVertical: SIZES.xsmall,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'center',
  },
});
