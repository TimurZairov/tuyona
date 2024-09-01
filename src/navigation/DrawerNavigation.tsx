import {createDrawerNavigator} from '@react-navigation/drawer';
import RootNavigation from './RootNavigation';
import {COLORS} from '../theme/theme';
import DrawerScreen from '../screens/DrawerScreen/DrawerScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: COLORS.mainColor,
          width: 300,
          paddingHorizontal: 10,
        },
        swipeEnabled: false,
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name={'Root'} component={RootNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
