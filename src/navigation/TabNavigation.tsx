import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainNavigation from './MainNavigation';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import {TabNavigationStack} from './types';

import {useTranslation} from 'react-i18next';

import {useAppSelector} from '../providers/redux/type';
import ProfileStack from './ProfileStack';

import MapScreen from '../screens/MapScreen/MapScreen';
import CustomTabBar from '../components/CustomTabBar/CustomTabBar';
import {View} from 'react-native';
import HomeIcon from '../assets/icons/HomeIcon';
import InActiveHomeIcon from '../assets/icons/InActiveHomeIcon';
import FavoriteTabIcon from '../assets/icons/FavoriteTabIcon';
import InActiveFavoriteTabIcon from '../assets/icons/InActiveFavoriteTabIcon';
import SettingTabIcon from '../assets/icons/SettingTabIcon';
import InActiveSettingsTabIcon from '../assets/icons/InActiveSettingsTabIcon';
import SearchTabIcon from '../assets/icons/SearchTabIcon';
import InActiveSearchTabIcon from '../assets/icons/InActiveSearchTabIcon';

const Tab = createBottomTabNavigator<TabNavigationStack>();

const TabNavigation = () => {
  const {t} = useTranslation();
  const {cart} = useAppSelector(state => state.cart);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName="MainNav">
      <Tab.Screen
        name="MainNav"
        component={MainNavigation}
        options={{
          title: `${t('mainScreen')}`,
          tabBarIcon: focused => {
            return <View>{focused ? <HomeIcon /> : <InActiveHomeIcon />}</View>;
          },
        }}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Карта',
          tabBarIcon: focused => {
            return (
              <View>
                {focused ? <SearchTabIcon /> : <InActiveSearchTabIcon />}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: `${t('favorite')}`,
          tabBarIcon: focused => {
            return (
              <View>
                {focused ? <FavoriteTabIcon /> : <InActiveFavoriteTabIcon />}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: `${t('profile')}`,
          tabBarIcon: focused => {
            return (
              <View>
                {focused ? <SettingTabIcon /> : <InActiveSettingsTabIcon />}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
