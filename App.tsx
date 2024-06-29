import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import TabNavigation from './src/navigation/TabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.gesture}>
        <SafeAreaProvider>
          <View style={styles.app}>
            <TabNavigation />
          </View>
        </SafeAreaProvider>
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
