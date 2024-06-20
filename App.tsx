import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.gesture}>
        <View style={styles.app}>
          <RootNavigation />
        </View>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
  },
  app: {
    flex: 1,
  },
});
