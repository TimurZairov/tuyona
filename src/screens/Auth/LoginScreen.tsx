import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <Text>Войдите</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
