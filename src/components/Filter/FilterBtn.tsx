import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, FC} from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import CheckedFilterIcon from '../../assets/icons/CheckedFilterIcon';
import {SvgUri} from 'react-native-svg';

import {useAppContext} from '../../providers/context/context';
import useBottomSheetFilter from '../../common/hooks/useBottomSheetFilter';

interface IFilterBtn {
  characteristic_type: string;
  icon: string;
  id: number;
  options: [
    {id: number; title_ru: string; title_uz: string; value: string},
    {id: number; title_ru: string; title_uz: string; value: string},
    {id: number; title_ru: string; title_uz: string; value: string},
  ];
  position: number;
  title_ru: string;
  title_uz: string;
}

const FilterBtn: FC<{
  filterItem: IFilterBtn;
  setIsFilterBlockVisible: Dispatch<React.SetStateAction<object>>;
  isFilterBlockVisible: object | null;
}> = ({filterItem, setIsFilterBlockVisible, isFilterBlockVisible}) => {
  const aar = {};
  const {language} = useAppContext();
  const {toggleFilterState} = useBottomSheetFilter();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        toggleFilterState(
          filterItem.id,
          isFilterBlockVisible,
          setIsFilterBlockVisible,
        )
      }>
      <View style={styles.filterBtn}>
        {filterItem?.icon?.slice(filterItem.icon.length - 3) === 'png' ? (
          <Image source={{uri: filterItem.icon}} width={28} height={28} />
        ) : (
          <SvgUri uri={filterItem.icon} width={28} height={28} />
        )}
      </View>
      <View style={{position: 'absolute', bottom: 20, right: 10}}>
        {isFilterBlockVisible[`${filterItem.id}`]?.active && (
          <CheckedFilterIcon />
        )}
      </View>
      <Text style={styles.title}>
        {language === 'ru' ? filterItem?.title_ru : filterItem?.title_uz}
      </Text>
    </Pressable>
  );
};

export default React.memo(FilterBtn);

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
