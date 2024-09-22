import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import CheckedFilterIcon from '../../assets/icons/CheckedFilterIcon';
import {SvgUri} from 'react-native-svg';

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
  onPress: () => void;
  isActive: string[];
}> = ({filterItem, onPress, isActive}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.filterBtn}>
        {filterItem?.icon?.slice(filterItem.icon.length - 3) === 'png' ? (
          <Image source={{uri: filterItem.icon}} width={28} height={28} />
        ) : (
          <SvgUri uri={filterItem.icon} width={28} height={28} />
        )}
      </View>
      <View style={{position: 'absolute', bottom: 20, right: 10}}>
        {isActive.map(
          (active, index) =>
            active === filterItem.id && <CheckedFilterIcon key={index} />,
        )}
      </View>
      <Text style={styles.title}>{filterItem?.title_ru}</Text>
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
