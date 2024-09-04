import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {FC} from 'react';

import {COLORS} from '../../theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MainLogo from '../../assets/icons/MainLogo';
import Burger from '../../assets/icons/Burger';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {useAppSelector} from '../../providers/redux/type';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header: FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<DrawerNavigationHelpers>();
  const {user} = useAppSelector(state => state.user);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View
      style={[
        styles.container,
        {marginTop: Platform.OS === 'ios' ? insets.top : 20},
      ]}>
      <View style={styles.logo}>
        <MainLogo />
      </View>

      {/* Drawer btn */}
      <TouchableOpacity
        style={styles.drawerBtn}
        activeOpacity={0.8}
        onPress={openDrawer}>
        <Burger />
      </TouchableOpacity>
      <View style={styles.headerProfile}>
        <View style={styles.profile}>
          {user && user?.avatar ? (
            <Image source={{uri: user?.avatar}} style={styles.avatar} />
          ) : (
            <AntDesign name="user" color={COLORS.mainColor} size={20} />
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10,
    position: 'relative',
  },
  logo: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  drawerBtn: {
    width: 56,
    height: 56,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    backgroundColor: COLORS.redColor,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  headerProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: COLORS.mainColor,
    paddingHorizontal: 8,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
  },
  profile: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.redColor,
    borderRadius: 20,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
