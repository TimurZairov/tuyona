import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../Card/Card';
import {DATA} from '../../data/slider';

const MainCardList = () => {
  return (
    <FlatList
      data={DATA || []}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatList}
      renderItem={({item}) => {
        return <Card item={item} />;
      }}
    />
  );
};

export default MainCardList;

const styles = StyleSheet.create({
  flatList: {
    paddingLeft: 8,
  },
});
