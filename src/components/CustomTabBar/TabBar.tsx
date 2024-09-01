import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {FC, ReactNode} from 'react';

import {COLORS, SIZES} from '../../theme/theme';

const TabBar: FC<{
  label: string | undefined;
  onPress: () => void;
  focused: boolean;
  tabBarIcon: (
    focused: boolean,
    color?: string,
    size?: number,
  ) => ReactNode | undefined;
}> = ({label, onPress, focused, tabBarIcon}) => {
  return (
    <Pressable onPress={onPress} style={styles.tabBarButton}>
      {tabBarIcon && tabBarIcon(focused)}
      <Text
        style={[
          styles.label,
          {color: focused ? COLORS.blueColor : COLORS.blackColor},
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  label: {
    fontSize: SIZES.xsmall,
    fontWeight: '300',
    marginTop: 6,
  },
});
