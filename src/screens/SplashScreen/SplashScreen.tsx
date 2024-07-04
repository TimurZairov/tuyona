import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Tab');
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.splash}>
      <Text>TUYONA</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
