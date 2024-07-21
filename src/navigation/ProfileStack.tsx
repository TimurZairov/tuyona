import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import LanguageScreen from '../screens/LanguageScreen/LanguageScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import EditProfile from '../screens/ProfileScreen/EditProfile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Edit" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
