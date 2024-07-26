import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, height, width} from '../../theme/theme';
import MainTitle from '../MainTitle/MainTitle';
import {ICategory} from '../../types/types';
import {useNavigation} from '@react-navigation/native';
import {BASE_URL} from '../../config/config';
import {setFilteredItems} from '../../providers/redux/slices/serviceProviderSlice';
import {useAppDispatch} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';

const CategoryCard = ({category}: ICategory) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {language} = useAppContext();

  const getFilteredList = async (id: any) => {
    try {
      const result = await fetch(
        BASE_URL + '/service-categories/' + id + '/services/',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-language': language,
          },
        },
      );

      // console.log(JSON.stringify(result, null, 2));
      const filteredList = await result.json();

      if (!filteredList) {
        throw new Error('filtered action');
      }
      // console.log(JSON.stringify(filteredList, null, 2));
      dispatch(setFilteredItems(filteredList));
      navigation.navigate('ServiceList');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainTitle title={category?.title} />
      <TouchableOpacity
        style={styles.card}
        onPress={() => getFilteredList(category.id)}>
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
