import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, height, SIZES} from '../../theme/theme';
import FilterIcon from '../../assets/icons/FilterIcon';

const Filter: FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.btn}>
        <FilterIcon />
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filter: {
    width: '80%',
    backgroundColor: COLORS.mainColor,
    marginBottom: 10,
    height: height / 20,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: SIZES.medium,
  },
  btn: {
    height: height / 20,
    width: '18%',
    backgroundColor: COLORS.redColor,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomLeftRadius: 0,
  },
});
