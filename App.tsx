import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import {store} from './src/providers/redux/store';
import {AppContextProvider} from './src/providers/context/context';
import {Provider} from 'react-redux';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <NavigationContainer>
          <GestureHandlerRootView style={styles.gesture}>
            <BottomSheetModalProvider>
              <SafeAreaProvider>
                <View style={styles.app}>
                  <DrawerNavigation />
                  <Toast />
                </View>
              </SafeAreaProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      </AppContextProvider>
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
