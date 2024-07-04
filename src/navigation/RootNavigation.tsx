import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import {RootNavigationStack} from './types';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator<RootNavigationStack>();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
