import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SIZES, width} from '../../theme/theme';
import Input from '../../components/Input/Input';
import Social from '../../components/Social/Social';
import Button from '../../components/Button/Button';
import GoBack from '../../components/GoBack/GoBack';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from '../../providers/redux/type';
import {loginAction} from '../../providers/redux/actions/loginAction';
import {ProfileNavigationProp} from '../../navigation/types';
import {useAppContext} from '../../providers/context/context';

const LoginScreen = () => {
  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [loading, setLoading] = useState(false);

  //
  const {setAccessToken, accessToken} = useAppContext();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<ProfileNavigationProp>();
  const dispatch = useAppDispatch();

  //go back
  const goBackHandler = () => {
    navigation.goBack();
  };
  //RegisterScreen navigation

  const registerScreenNavigationHandler = () => {
    navigation.navigate('Register');
  };
  //USER LOGIN HANDLER
  const userLoginHandler = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const data = {
      username,
      password,
    };

    //login
    await dispatch(
      loginAction({
        data,
        setAccessToken,
      }),
    );

    setLoading(false);
  };

  useEffect(() => {
    if (accessToken !== null && accessToken !== undefined) {
      navigation.replace('Tab');
    }
  }, [accessToken]);

  return (
    <SafeAreaView style={styles.container}>
      {/* GO BACK */}
      <View
        style={[styles.goBack, {top: Platform.OS === 'ios' ? insets.top : 16}]}>
        <GoBack onPress={goBackHandler} />
      </View>
      {/* INPUTS */}
      <Text style={styles.name}>Войдите</Text>
      <View style={styles.wrapper}>
        <Input placeholder={'User name'} setValue={setUsername} />
      </View>

      <View style={styles.wrapper}>
        <Input placeholder={'Password'} isSecured setValue={setPassword} />
      </View>

      <View style={[styles.wrapper]}>
        <Text style={styles.account}>
          У вас нет акаунта?
          <Text
            style={styles.registration}
            onPress={registerScreenNavigationHandler}>
            {' '}
            Регистрация
          </Text>
        </Text>
        <Text style={[styles.account, styles.or]}>или</Text>
      </View>

      {/* SOCIAL */}
      <Social />
      {/* Button */}
      <Button
        textStyle={styles.textBtn}
        style={styles.btn}
        onPress={userLoginHandler}
        loading={loading}>
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
  goBack: {
    position: 'absolute',
    left: 8,
  },
});
