import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES, height} from '../../theme/theme';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.7}>
        <AntDesign
          name="arrowleft"
          color={COLORS.blackColor}
          size={SIZES.h2.md}
        />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={SIZES.medium}
          color={COLORS.lightGray}
        />
        <TextInput placeholder="Быстрый поиск" style={styles.input} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 6,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: COLORS.mainColor,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.medium,
    columnGap: SIZES.xsmall,
    flex: 1,
  },
  input: {
    height: height / 36,
    flex: 1,
  },
});
