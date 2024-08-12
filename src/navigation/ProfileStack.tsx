import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import LanguageScreen from '../screens/LanguageScreen/LanguageScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import EditProfile from '../screens/ProfileScreen/EditProfile';
import {ProfileNavigationStack} from './types';

const Stack = createNativeStackNavigator<ProfileNavigationStack>();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="Edit"
        component={EditProfile}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
