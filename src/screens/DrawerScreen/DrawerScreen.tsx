import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const DrawerScreen: FC<DrawerContentComponentProps> = props => {
  return (
    <View style={styles.drawer}>
      <Text>DrawerScreen</Text>
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
