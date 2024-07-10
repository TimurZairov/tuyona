import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../Card/Card';
import {DATA} from '../../data/slider';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {getServices} from '../../providers/redux/actions/servicesAction';
import {useAppContext} from '../../providers/context/context';

const MainCardList = () => {
  const dispatch = useAppDispatch();
  const {language} = useAppContext();
  const {services} = useAppSelector(state => state.services);

  useEffect(() => {
    //get services
    dispatch(getServices({language}));
  }, []);

  return (
    <FlatList
      data={services || []}
      horizontal
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={true}
      keyExtractor={item => item.id.toString()}
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
