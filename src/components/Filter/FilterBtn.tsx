import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../theme/theme';

const FilterBtn: FC<{title: string; onPress: () => void}> = ({
  title,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.filterBtn}>
        <Text>1</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
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
