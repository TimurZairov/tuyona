import {ScrollView, StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import FilterSortButton from '../FilterSortButton/FilterSortButton';
import {useAppContext} from '../../providers/context/context';

const FilterScroll: FC<{arr: string[]}> = ({arr}) => {
  const {language} = useAppContext();

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sort}>
        {arr.map((b, index) => (
          <FilterSortButton
            key={index}
            title={language === 'ru' ? b.title_ru : b.title_uz}
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
