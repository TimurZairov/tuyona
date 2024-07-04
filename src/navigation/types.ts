import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootNavigationStack = {
  Splash: undefined;
  Tab: undefined;
  Login: undefined;
  Register: undefined;
};

export type TabNavigationStack = {
  MainNav: undefined;
  Reminder: undefined;
  Favorite: undefined;
  Profile: undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  RootNavigationStack,
  'Register'
>;

export type RegisterNavigationProp = NativeStackNavigationProp<
  RootNavigationStack,
  'Tab'
>;
