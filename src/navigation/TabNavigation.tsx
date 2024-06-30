import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import MainNavigation from './MainNavigation';
import ReminderScreen from '../screens/ReminderScreen/ReminderScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../theme/theme';
import {TabNavigationStack} from './types';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator<TabNavigationStack>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.blueColor,
        tabBarInactiveTintColor: COLORS.lightGray,
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
          title: 'Главная',
        }}
      />
      <Tab.Screen
        name="Reminder"
        component={ReminderScreen}
        options={{
          tabBarIcon: color => {
            return <Ionicons name="time" size={20} color={color.color} />;
          },
          title: 'Нопоминание',
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: color => {
            return <Ionicons name="heart" size={18} color={color.color} />;
          },
          title: 'Избранное',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: color => {
            return <Ionicons name="person" size={18} color={color.color} />;
          },
          title: 'Профилиль',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
