import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {COLORS, SIZES} from '../../theme/theme';

const FilterSortButton: FC<{
  title: string;
}> = ({title}) => {
  const [activeFilterBtn, setActiveFilterBtn] = useState(false);

  //
  const activeFilter = () => {
    setActiveFilterBtn(prev => !prev);
  };

  return (
    <Pressable onPress={activeFilter} style={styles.container}>
      <View
        style={[
          styles.btn,
          {
            backgroundColor: activeFilterBtn
              ? COLORS.redColor
              : COLORS.mainColor,
          },
        ]}>
        <Text
          style={[
            styles.filterText,
            {color: activeFilterBtn ? COLORS.mainColor : COLORS.blackColor},
          ]}>
          {title}
        </Text>
      </View>
    </Pressable>
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
  filterText: {
    fontSize: SIZES.small,
    fontWeight: '300',
  },
});
