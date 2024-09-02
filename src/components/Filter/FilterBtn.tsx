import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../theme/theme';

const FilterBtn: FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.filterBtn}>
        <Text>1</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default FilterBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  filterBtn: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.redColor,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: SIZES.xsmall,
    fontWeight: '200',
  },
});
