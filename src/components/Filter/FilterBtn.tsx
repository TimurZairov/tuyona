import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import CheckedFilterIcon from '../../assets/icons/CheckedFilterIcon';

const FilterBtn: FC<{
  filterItem: string;
  onPress: () => void;
  isActive: string[];
}> = ({filterItem, onPress, isActive}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.filterBtn}>
        <Text>1</Text>
      </View>
      <View style={{position: 'absolute', bottom: 20, right: 10}}>
        {isActive.map(
          active =>
            active === filterItem.title_ru && (
              <CheckedFilterIcon key={active} />
            ),
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
