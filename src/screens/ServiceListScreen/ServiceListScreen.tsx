import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import MainCardList from '../../components/MainCardList/MainCardList';
import {useRoute} from '@react-navigation/native';

const ServiceListScreen: FC = () => {
  const route = useRoute();
  const {title, filterId} = route.params as {
    title: string | undefined;
    filterId: string;
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollWrapper}>
        <MainCardList title={title!} filterId={filterId} />
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
