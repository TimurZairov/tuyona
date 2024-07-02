import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootNavigation from './src/navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/providers/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GestureHandlerRootView style={styles.gesture}>
          <SafeAreaProvider>
            <View style={styles.app}>
              <RootNavigation />
            </View>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </Provider>
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
