import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, height, width} from '../../theme/theme';
import MainTitle from '../MainTitle/MainTitle';
import {ICategory} from '../../types/types';
import {useNavigation} from '@react-navigation/native';

import {setFilteredItems} from '../../providers/redux/slices/serviceProviderSlice';
import {useAppDispatch} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';
import Card from '../Card/Card';

const CategoryCard = ({category}: ICategory) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {language} = useAppContext();

  return (
    <>
      <MainTitle title={category?.title} />
      <ScrollView horizontal>
        {category &&
          category.service_providers.length &&
          category.service_providers.map((item, index) => (
            <Card key={item.id} item={item} />
          ))}
      </ScrollView>
    </>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});

//fmc
//screen invisible
//favorite providers
//
