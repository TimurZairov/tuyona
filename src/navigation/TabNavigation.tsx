import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import MainNavigation from './MainNavigation';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../theme/theme';
import {TabNavigationStack} from './types';
import {Platform} from 'react-native';
import {useTranslation} from 'react-i18next';

import {useAppSelector} from '../providers/redux/type';
import ProfileStack from './ProfileStack';

import MapScreen from '../screens/MapScreen/MapScreen';

const Tab = createBottomTabNavigator<TabNavigationStack>();

const TabNavigation = () => {
  const {t} = useTranslation();
  const {cart} = useAppSelector(state => state.cart);

  return (
    <Tab.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.redColor,
        tabBarInactiveTintColor: COLORS.blueColor,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 60 : 70,
          paddingBottom: Platform.OS === 'android' ? 10 : 20,
        },
      }}
      initialRouteName="MainNav">
      <Tab.Screen
        name="MainNav"
        component={MainNavigation}
        options={{
          tabBarIcon: color => {
            return <Ionicons name="home-sharp" size={20} color={color.color} />;
          },
          title: `${t('mainScreen')}`,
        }}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: color => {
            return <Ionicons name="map" size={20} color={color.color} />;
          },
          title: 'Карта',
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: color => {
            return <Ionicons name="heart" size={18} color={color.color} />;
          },
          title: `${t('favorite')}`,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: color => {
            return <Ionicons name="person" size={18} color={color.color} />;
          },
          title: `${t('profile')}`,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
