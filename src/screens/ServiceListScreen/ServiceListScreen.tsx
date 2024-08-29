import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainCardList from '../../components/MainCardList/MainCardList';

const ServiceListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollWrapper}>
        <MainCardList />
      </View>
    </View>
  );
};

export default ServiceListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollWrapper: {paddingHorizontal: 8, marginTop: 16, flex: 1},
});
