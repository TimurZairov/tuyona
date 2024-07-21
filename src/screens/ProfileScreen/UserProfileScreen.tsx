import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, height} from '../../theme/theme';
import {User} from '../../types/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LoginSettings from '../../components/LoginSettings/LoginSettings';
import {useNavigation} from '@react-navigation/native';

interface IUserProfileScreen {
  user: User;
}

const UserProfileScreen = ({user}: IUserProfileScreen) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const profileSettings = [
    {
      icon: <MaterialIcons name="settings" size={26} />,
      text: 'Настройки',
    },
    {
      icon: <MaterialIcons name="support-agent" size={26} />,
      text: 'Сервис поддрежки',
    },
    {
      icon: <Ionicons name="person" size={26} />,
      text: 'Персональные данные',
      onPress: () => {
        navigation.navigate('Edit');
      },
    },
    {
      icon: <Ionicons name="information-circle-outline" size={26} />,
      text: 'О программе',
    },
  ];

  const profileFooter = [
    {
      icon: <Ionicons name="briefcase" size={26} />,
      text: 'Создать бизнес-профиль',
    },

    {
      icon: <Ionicons name="exit-outline" size={26} />,
      text: 'Выйти из приложения',
    },
  ];

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <View
          style={[
            styles.headerContainer,
            {paddingTop: Platform.OS === 'ios' ? insets.top : 18},
          ]}>
          <View style={styles.wrapper}>
            <Ionicons name="person" size={50} color={COLORS.lightGray} />
            <View style={styles.plus}>
              <Text style={styles.plusText}>+</Text>
            </View>
          </View>
          <Text style={styles.name}>{user?.username}</Text>
        </View>
      </View>
      {/* BODY */}
      <View style={styles.body}>
        {profileSettings.map((item, index) => {
          return (
            <LoginSettings
              key={index}
              item={item}
              index={index}
              length={profileSettings.length}
            />
          );
        })}
      </View>
      {/* FOOTER */}
      <View style={styles.footer}>
        {profileFooter.map((item, index) => {
          return (
            <LoginSettings
              key={index}
              item={item}
              index={index}
              length={profileFooter.length}
            />
          );
        })}
      </View>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  header: {
    height: height / 3.5,
    backgroundColor: COLORS.mainColor,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  headerContainer: {
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    padding: 30,
    backgroundColor: COLORS.grayColor,
    borderRadius: 100,
  },
  name: {
    fontSize: SIZES.h5.lg,
    fontWeight: '800',
    marginTop: 10,
    color: COLORS.blackColor,
  },
  plus: {
    position: 'absolute',
    width: 25,
    aspectRatio: 1,
    backgroundColor: COLORS.blueColor,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    right: 4,
    bottom: 4,
  },
  plusText: {
    color: COLORS.mainColor,
    fontSize: SIZES.medium,
  },
  body: {
    backgroundColor: COLORS.mainColor,
    marginVertical: 10,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  footer: {
    height: '100%',
    backgroundColor: COLORS.mainColor,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
