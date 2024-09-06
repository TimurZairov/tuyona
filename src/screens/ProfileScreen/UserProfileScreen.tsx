import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, width} from '../../theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LoginSettings from '../../components/LoginSettings/LoginSettings';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../providers/redux/type';

import {EditNavigationProp} from '../../navigation/types';
import Layout from '../../components/Layout/Layout';
import useUserProfileScreen from '../../common/hooks/useUserProfileScreen';

const UserProfileScreen: FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<EditNavigationProp>();
  const {user} = useAppSelector(state => state.user);
  const {base64Url, loading, pickImage, logout} = useUserProfileScreen();

  const profileSettings = [
    {
      icon: (
        <MaterialIcons name="settings" size={26} color={COLORS.blueColor} />
      ),
      text: 'Настройки',
    },
    {
      icon: (
        <MaterialIcons
          name="support-agent"
          size={26}
          color={COLORS.blueColor}
        />
      ),
      text: 'Сервис поддрежки',
    },
    {
      icon: <Ionicons name="person" size={26} color={COLORS.blueColor} />,
      text: 'Персональные данные',
      onPress: () => {
        navigation.navigate('Edit');
      },
    },
    {
      icon: (
        <MaterialIcons name="language" size={26} color={COLORS.blueColor} />
      ),
      text: 'Изменить язык',
      onPress: () => {
        navigation.navigate('Language');
      },
    },
    {
      icon: (
        <Ionicons
          name="information-circle-outline"
          size={26}
          color={COLORS.blueColor}
        />
      ),
      text: 'О программе',
    },
  ];

  const profileFooter = [
    {
      icon: <Ionicons name="briefcase" size={26} color={COLORS.blueColor} />,
      text: 'Создать бизнес-профиль',
    },

    {
      icon: <Ionicons name="exit-outline" size={26} color={COLORS.blueColor} />,
      text: 'Выйти из приложения',
      isIcon: false,
      onPress: logout,
    },
  ];

  //update avatar

  return (
    <Layout>
      {/* INFO */}
      <View style={[styles.headerContainer]}>
        <TouchableOpacity style={styles.wrapper} onPress={pickImage}>
          {user?.avatar || base64Url !== null ? (
            <Image
              source={{uri: user?.avatar || base64Url!}}
              style={styles.image}
            />
          ) : (
            <>
              <Ionicons name="person" size={50} color={COLORS.lightGray} />
              <View style={styles.plus}>
                <Text style={styles.plusText}>+</Text>
              </View>
            </>
          )}
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user?.username}</Text>
          <Text style={styles.name}>{user?.first_name}</Text>
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
              isIcon={item.isIcon}
            />
          );
        })}
      </View>
    </Layout>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: width / 6,
    aspectRatio: 1,
    backgroundColor: COLORS.grayColor,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.redColor,
  },
  userInfo: {
    flexDirection: 'row',
    columnGap: 10,
  },

  name: {
    fontSize: SIZES.medium,
    fontWeight: '400',
    marginTop: 10,
    color: COLORS.blackColor,
  },
  image: {
    width: '100%',
    height: '100%',
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
