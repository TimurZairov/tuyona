import {StyleSheet, View} from 'react-native';
import React from 'react';

import MainScreen from './src/screens/MainScreen/MainScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.gesture}>
      <View style={styles.app}>
        <MainScreen />
      </View>
    </GestureHandlerRootView>
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
