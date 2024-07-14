import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen/MainScreen';
import React from 'react-native';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import {MainNavigationStack} from './types';
import ServiceListScreen from '../screens/ServiceListScreen/ServiceListScreen';

const Stack = createNativeStackNavigator<MainNavigationStack>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="ServiceList" component={ServiceListScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
