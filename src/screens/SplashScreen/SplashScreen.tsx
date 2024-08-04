import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import useRefreshAccessToken from '../../common/hooks/useRefreshAccessToken';
import '../../common/services/i18next';
import {RegisterNavigationProp} from '../../navigation/types';
import Logo from '../../assets/icons/Logo';
import {COLORS, height, width} from '../../theme/theme';
import Title from '../../assets/icons/Title';
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

interface NavigationProp {
  navigation: RegisterNavigationProp;
}

const SplashScreen = ({navigation}: NavigationProp) => {
  const {isReady, isDone, banners} = useRefreshAccessToken();
  const logoScale = useSharedValue(0.85);
  const moveTitle = useSharedValue(-100);
  //
  useEffect(() => {
    logoScale.value = withTiming(1, {duration: 2000});
    moveTitle.value = withDelay(1200, withTiming(0, {duration: 800}));
  }, []);
  //Splash timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isReady && isDone && banners) {
        navigation.replace('Tab');
      }
    }, 2600);

    return () => {
      clearTimeout(timer);
    };
  }, [isReady, isDone, banners]);

  return (
    <View style={styles.splash}>
      <Animated.View style={{transform: [{scale: logoScale}]}}>
        <Logo />
      </Animated.View>

      <View style={styles.title}>
        <Animated.View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: moveTitle,
          }}>
          <Title />
        </Animated.View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4EDEB',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: width,
    height: height / 10,
  },
});
