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
  ProfileStack: undefined;
  Cart: undefined;
  Map: undefined;
};

export type MainNavigationStack = {
  Main: undefined;
  ServiceList: undefined;
  Info: {
    id: number;
  };
  Provider: {
    id: number;
  };
};

export type ProfileNavigationStack = {
  Profile: undefined;
  Language: undefined;
  Settings: undefined;
  Edit: undefined;
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  RootNavigationStack,
  'Register'
>;

export type RegisterNavigationProp = NativeStackNavigationProp<
  RootNavigationStack,
  'Tab'
>;
export type InfoNavigationProp = NativeStackNavigationProp<
  MainNavigationStack,
  'Info'
>;

export type ServiceProviderNavigationProp = NativeStackNavigationProp<
  MainNavigationStack,
  'Provider'
>;

export type ServiceListNavigationProp = NativeStackNavigationProp<
  MainNavigationStack,
  'ServiceList'
>;

export type EditNavigationProp = NativeStackNavigationProp<
  ProfileNavigationStack,
  'Edit'
>;

export type LoginNavigationProp = NativeStackNavigationProp<
  RootNavigationStack,
  'Login'
>;

export type SettingsNavigationProp = NativeStackNavigationProp<
  ProfileNavigationStack,
  'Language',
  'Settings'
>;
