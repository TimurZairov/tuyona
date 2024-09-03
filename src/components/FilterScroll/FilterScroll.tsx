import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import FilterSortButton from '../FilterSortButton/FilterSortButton';

const FilterScroll: FC<{arr: string[]}> = ({arr}) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sort}>
        {arr.map((b, index) => (
          <FilterSortButton key={index} title={b} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FilterScroll;

const styles = StyleSheet.create({
  sort: {},
});
