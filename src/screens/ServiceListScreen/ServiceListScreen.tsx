import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainCardList from '../../components/MainCardList/MainCardList';
import {useRoute} from '@react-navigation/native';

const ServiceListScreen = () => {
  const route = useRoute();
  const {title} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.scrollWrapper}>
        <MainCardList title={title} />
      </View>
    </View>
  );
};

export default ServiceListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollWrapper: {
    marginTop: 16,
    flex: 1,
  },
});
