import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES, width} from '../../theme/theme';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import Input from '../../components/Input/Input';
import Social from '../../components/Social/Social';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from '../../providers/redux/type';
import {registerAction} from '../../providers/redux/actions/registerAction';
import {useAppContext} from '../../providers/context/context';
import {RegisterNavigationProp} from '../../navigation/types';
import Toast from 'react-native-toast-message';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState<string | undefined>('');
  const [lastName, setLastName] = useState<string | undefined>('');
  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [password2, setPassword2] = useState<string | undefined>('');
  const [loading, setLoading] = useState(false);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation<RegisterNavigationProp>();
  const dispatch = useAppDispatch();
  const {setAccessToken, accessToken} = useAppContext();

  //go back login screen

  const loginScreenNavigationHandler = () => {
    navigation.goBack();
  };

  //REGISTRY
  const registerHandler = async () => {
    if (loading) {
      return;
    }
    if (password !== password2) {
      Toast.show({
        type: 'error',
        text1: 'Ошибка',
        text2: 'Пароли дожны совпадать',
      });
      return;
    }
    setLoading(true);
    const data = {
      firstName,
      lastName,
      username,
      password,
      password2,
    };
    await dispatch(registerAction({data, setAccessToken}));
    setLoading(false);
  };

  //if access token !== null navigate to main screen
  useEffect(() => {
    if (accessToken !== null && accessToken !== undefined) {
      navigation.replace('Tab');
    }
  }, [accessToken]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Go Back */}
      <View
        style={[styles.goBack, {top: Platform.OS === 'ios' ? insets.top : 16}]}>
        <GoBack onPress={loginScreenNavigationHandler} />
      </View>

      <Text style={styles.name}>Регистрация</Text>
      {/* INPUTS */}
      <View style={styles.wrapper}>
        <Input placeholder={'first_name'} setValue={setFirstName} />
      </View>

      <View style={styles.wrapper}>
        <Input placeholder={'last_name'} setValue={setLastName} />
      </View>

      <View style={styles.wrapper}>
        <Input placeholder={'username'} setValue={setUsername} />
      </View>

      <View style={styles.wrapper}>
        <Input placeholder={'password'} setValue={setPassword} isSecured />
      </View>

      <View style={styles.wrapper}>
        <Input placeholder={'confirm'} setValue={setPassword2} isSecured />
      </View>
      {/* Login Option */}
      <View style={[styles.wrapper]}>
        <Text style={styles.account}>
          У вас нет акаунта?
          <Text style={styles.registration}> Регистрация</Text>
        </Text>
        <Text style={[styles.account, styles.or]}>или</Text>
      </View>
      {/* Social */}
      <Social />

      {/* Button */}

      <Button
        textStyle={styles.textBtn}
        style={styles.btn}
        onPress={registerHandler}
        loading={loading}>
        Регистрация
      </Button>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  goBack: {
    position: 'absolute',
    left: 8,
  },
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
