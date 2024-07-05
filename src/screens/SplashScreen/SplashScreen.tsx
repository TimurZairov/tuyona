import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import useRefreshAccessToken from '../../common/hooks/useRefreshAccessToken';

const SplashScreen = ({navigation}: any) => {
  const {isReady} = useRefreshAccessToken();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigation.replace('Tab');
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);
  console.log(isReady);

  useEffect(() => {
    if (isReady) {
      navigation.replace('Tab');
    }
  }, [isReady]);
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
