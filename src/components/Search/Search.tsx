import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../theme/theme';
import SearchIcon from '../../assets/icons/SearchIcon';
import MicIcon from '../../assets/icons/MicIcon';

const Search: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={styles.left}>
          <SearchIcon />
          <TextInput placeholder="Поиск" style={styles.input} />
        </View>

        <MicIcon />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  search: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.mainColor,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: SIZES.medium,
    color: COLORS.blackColor,
    height: 40,
    width: '100%',
  },
});
