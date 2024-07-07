import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

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
      <View style={styles.imageWrapper}>
        <Image source={category.image} style={styles.image} />
      </View>

      <Text style={styles.title}>{category.title}</Text>
    </View>
  );
};

export default ScrollButton;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 8,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: COLORS.mainColor,
    padding: 8,
    borderRadius: 100,
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
