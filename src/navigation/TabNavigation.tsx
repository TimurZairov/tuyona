import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RootNavigation from './RootNavigation';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Tab" component={RootNavigation} />
      <Tab.Screen name="Tab2" component={RootNavigation} />
      <Tab.Screen name="Tab3" component={RootNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
