import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {COLORS, height, width} from '../../theme/theme';
import TabBar from './TabBar';

const CustomTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabBar}>
      {state &&
        state?.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          //isFocused
          const focused = state.index === index;

          //navigation
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TabBar
              key={route.key}
              label={options.title}
              onPress={onPress}
              focused={focused}
              tabBarIcon={options.tabBarIcon}
            />
          );
        })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    minHeight: height / 11,
    width: width - 16,
    backgroundColor: COLORS.mainColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
