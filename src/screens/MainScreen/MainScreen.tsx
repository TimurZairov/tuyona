import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES, height} from '../../theme/theme';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      {/* HEADER */}
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
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
  },
  header: {
    paddingHorizontal: 6,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: 'red',
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
    backgroundColor: 'red',
    flex: 1,
  },
});
