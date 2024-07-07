import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS, SIZES, height} from '../../theme/theme';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={SIZES.medium}
          color={COLORS.lightGray}
        />
        <TextInput placeholder={t('search').toString()} style={styles.input} />
      </View>
      {/* Notification */}
      {/* <TouchableOpacity activeOpacity={0.7} style={styles.notification}>
        <Ionicons
          name="notifications"
          color={COLORS.blackColor}
          size={SIZES.h2.md}
        />
        <View style={styles.notificationNum}>
          <Text style={styles.notificationText}>4</Text>
        </View>
      </TouchableOpacity> */}

      {/* Filter */}
      <TouchableOpacity activeOpacity={0.7} style={styles.notification}>
        <FontAwesome6
          name="sliders"
          color={COLORS.blackColor}
          size={SIZES.h2.md}
        />
        {/* <View style={styles.notificationNum}>
          <Text style={styles.notificationText}>4</Text>
        </View> */}
      </TouchableOpacity>
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
    paddingVertical: 6,
    borderRadius: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.medium,
    columnGap: SIZES.xsmall,
    flex: 1,
  },
  input: {
    height: 40,
    // backgroundColor: 'red',
    fontSize: 14,
    flex: 1,
    color: COLORS.blackColor,
    overflow: 'hidden',
  },
  notification: {
    marginRight: 6,
  },
  notificationNum: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: COLORS.blueColor,
    width: 20,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    right: -6,
    top: -6,
    borderWidth: 0.5,
    borderColor: COLORS.mainColor,
  },
  notificationText: {
    color: COLORS.mainColor,
    fontSize: 12,
    fontWeight: '400',
  },
});
