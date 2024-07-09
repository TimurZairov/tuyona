import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import useRefreshAccessToken from '../../common/hooks/useRefreshAccessToken';
import {useTranslation} from 'react-i18next';
import '../../common/services/i18next';
const SplashScreen = ({navigation}: any) => {
  const {isReady} = useRefreshAccessToken();
  const {t} = useTranslation();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigation.replace('Tab');
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  useEffect(() => {
    if (isReady) {
      navigation.replace('Tab');
    }
  }, [isReady]);
  return (
    <View style={styles.splash}>
      <Text>TUYONA</Text>
      <Text>{t('welcome')}</Text>
      {/* <View>
        <TouchableOpacity>
          <Text>RU</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>UZ</Text>
        </TouchableOpacity>
      </View> */}
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
