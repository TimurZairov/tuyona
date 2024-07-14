import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MainCardList from '../../components/MainCardList/MainCardList';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ServiceListScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={[
          styles.header,
          {paddingTop: Platform.OS === 'ios' ? insets.top : 16},
        ]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btn}>
          <Ionicons
            name="chevron-back"
            size={SIZES.large}
            color={COLORS.blackColor}
          />
        </TouchableOpacity>
        <Text style={styles.title}>категории</Text>
        <View style={{width: 40}} />
      </View>

      <MainCardList />
    </View>
  );
};

export default ServiceListScreen;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: COLORS.mainColor,
    borderBottomStartRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: COLORS.blackColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: SIZES.h4.md,
    fontWeight: '700',
    marginBottom: 10,
    color: COLORS.blackColor,
  },
  btn: {
    padding: 10,
    borderRadius: 20,
  },
});
