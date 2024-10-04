import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, FC, useState} from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import useBottomSheetFilter from '../../common/hooks/useBottomSheetFilter';

const FilterSortButton: FC<{
  title: string;
  filterId: string | number;
  isFilterBlockVisible: {};
  setIsFilterBlockVisible: Dispatch<React.SetStateAction<object>>;
}> = ({title, filterId, isFilterBlockVisible, setIsFilterBlockVisible}) => {
  const [activeFilterBtn, setActiveFilterBtn] = useState(false);
  const {changeFilterValueState} = useBottomSheetFilter();

  //
  const activeFilter = () => {
    setActiveFilterBtn(prev => !prev);
    changeFilterValueState(
      filterId,
      isFilterBlockVisible,
      setIsFilterBlockVisible,
      title,
    );
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
