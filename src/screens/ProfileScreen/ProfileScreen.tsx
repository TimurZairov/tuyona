import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, height} from '../../theme/theme';
import LoginSettings from '../../components/LoginSettings/LoginSettings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  const loginSettings = [
    {
      icon: <MaterialIcons name="language" size={26} />,
      text: 'Изменить язык',
    },
    {
      icon: <MaterialIcons name="support-agent" size={26} />,
      text: 'Сервис поддрежки',
    },
    {
      icon: <Ionicons name="information-circle-outline" size={26} />,
      text: 'О программе',
    },
  ];

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={[styles.header, {paddingTop: insets.top}]}>
        <Text style={styles.title}>Войти в профиль</Text>
        <Text style={styles.subTitle}>
          Для доступа к профилю зарегистрируйтесь или войдите в существующий
          профиль
        </Text>
        <Button style={styles.btnCustom} textStyle={styles.textBtn}>
          Войдите или зарегистрируйтесь
        </Button>
      </View>
      {/* BODY */}
      <View style={styles.body}>
        <View>
          {loginSettings.map((item, index) => {
            return <LoginSettings key={index} item={item} index={index} />;
          })}
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height / 4,
    backgroundColor: COLORS.mainColor,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: SIZES.h4.md,
    color: COLORS.blackColor,
    fontWeight: '600',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: SIZES.small,
    color: COLORS.blackColor,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 16,
  },
  btnCustom: {
    marginTop: 'auto',
    borderRadius: 10,
  },
  textBtn: {
    color: COLORS.mainColor,
    fontSize: SIZES.medium,
    fontWeight: '400',
  },
  body: {
    flex: 1,
    backgroundColor: COLORS.mainColor,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    padding: 20,
  },
});
