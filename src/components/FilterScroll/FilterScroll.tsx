import {ScrollView, StyleSheet, View} from 'react-native';
import React, {Dispatch, FC, useState} from 'react';
import FilterSortButton from '../FilterSortButton/FilterSortButton';
import {useAppContext} from '../../providers/context/context';

const FilterScroll: FC<{
  arr: string[];
  filterId: string | number;
  isFilterBlockVisible: {};
  setIsFilterBlockVisible: Dispatch<React.SetStateAction<object>>;
}> = ({arr, filterId, isFilterBlockVisible, setIsFilterBlockVisible}) => {
  const {language} = useAppContext();

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sort}>
        {arr.map((b: any, index: number) => (
          <FilterSortButton
            key={`${index}${b.title_uz}`}
            filterId={filterId}
            title={language === 'ru' ? b.title_ru : b.title_uz}
            isFilterBlockVisible={isFilterBlockVisible}
            setIsFilterBlockVisible={setIsFilterBlockVisible}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FilterScroll;

const styles = StyleSheet.create({
  sort: {},
});
