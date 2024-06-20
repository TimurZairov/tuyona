import {StyleSheet, View} from 'react-native';
import React from 'react';

import MainScreen from './src/screens/MainScreen/MainScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <MainScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
