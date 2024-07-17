import {FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import Card from '../Card/Card';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {useAppContext} from '../../providers/context/context';
import {Service} from '../../types/types';

type TCard = {
  item: Service;
};

const MainCardList = () => {
  const dispatch = useAppDispatch();
  const {language} = useAppContext();
  const {services} = useAppSelector(state => state.services);

  // useEffect(() => {
  //   //get services
  //   dispatch(getServices({language}));
  // }, []);

  const renderItem = useCallback(({item}: TCard) => <Card item={item} />, []);

  return (
    <FlatList
      data={services || []}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={true}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.flatList}
      renderItem={renderItem}
    />
  );
};

export default MainCardList;

const styles = StyleSheet.create({
  flatList: {
    paddingLeft: 8,
    marginTop: 16,
  },
});
