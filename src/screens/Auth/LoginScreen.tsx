import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES, width} from '../../theme/theme';
import Input from '../../components/Input/Input';
import Social from '../../components/Social/Social';
import Button from '../../components/Button/Button';

const LoginScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      {/* INPUTS */}
      <Text style={styles.name}>Войдите</Text>
      <View style={styles.wrapper}>
        <Input placeholder={'User name'} />
      </View>

      <View style={styles.wrapper}>
        <Input placeholder={'Password'} isSecured />
      </View>

      <View style={[styles.wrapper]}>
        <Text style={styles.account}>
          У вас нет акаунта?
          <Text style={styles.registration}> Регистрация</Text>
        </Text>
        <Text style={[styles.account, styles.or]}>или</Text>
      </View>

      {/* SOCIAL */}
      <Social />
      {/* Button */}
      <Button textStyle={styles.textBtn} style={styles.btn}>
        Войти
      </Button>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainColor,
    justifyContent: 'center',
  },
  name: {
    fontSize: SIZES.h4.md,
    fontWeight: '800',
    color: COLORS.blackColor,
    textAlign: 'center',
    marginBottom: 20,
  },
  wrapper: {
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  account: {
    textAlign: 'center',
    color: COLORS.blackColor,
    fontSize: SIZES.small,
    fontWeight: '400',
  },
  registration: {
    textDecorationLine: 'underline',
    color: COLORS.blueColor,
  },
  or: {
    marginTop: 20,
  },
  btn: {
    alignSelf: 'center',
    width: width / 1.7,
    marginTop: 50,
    borderRadius: 8,
  },
  textBtn: {
    color: COLORS.mainColor,
    fontSize: SIZES.medium,
    fontWeight: '700',
  },
});
