import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../theme/theme';

const FilterSortButton: FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default FilterSortButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginRight: 10,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: COLORS.redColor,
    borderRadius: 20,
  },
});
