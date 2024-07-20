import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../theme/theme';
import {SvgUri} from 'react-native-svg';
import {ICategory} from '../../types/types';
import {BASE_URL} from '../../config/config';
import {useAppContext} from '../../providers/context/context';
import {useAppDispatch} from '../../providers/redux/type';
import {useNavigation} from '@react-navigation/native';
import {setFilteredItems} from '../../providers/redux/slices/servicesSLices';

const ScrollButton = ({category, food}: ICategory) => {
  const {language} = useAppContext();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  //answers
  const [categoryId, setCategoryId] = useState([]);
  //get filtered listItem

  //check later it doubled
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
    <View style={[styles.btn, {marginRight: food ? 8 : 0}]}>
      <Pressable
        style={styles.imageWrapper}
        onPress={() => getFilteredList(category.id)}>
        {/* <Image source={category.image} style={styles.image} /> */}
        {category && category.icon && (
          <SvgUri height={70} width={70} uri={category.icon} />
        )}
      </Pressable>

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
