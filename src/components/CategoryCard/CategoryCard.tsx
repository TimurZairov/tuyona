import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, height, width} from '../../theme/theme';
import MainTitle from '../MainTitle/MainTitle';
import {ICategory} from '../../types/types';
import {useNavigation} from '@react-navigation/native';

const CategoryCard = ({category}: ICategory) => {
  const navigation = useNavigation();

  const getListServices = () => {
    navigation.navigate('ServiceList');
  };
  return (
    <>
      <MainTitle title={category?.title} />
      <TouchableOpacity style={styles.card} onPress={getListServices}>
        {category && category?.photo && (
          <Image style={styles.photo} source={{uri: category?.photo}} />
        )}
      </TouchableOpacity>
    </>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: width - 16,
    height: height / 5,
    backgroundColor: COLORS.mainColor,
    overflow: 'hidden',
    borderRadius: 16,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
});
