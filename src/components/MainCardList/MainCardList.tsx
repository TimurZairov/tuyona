import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import Card from '../Card/Card';
import {useAppSelector} from '../../providers/redux/type';
import {Service} from '../../types/types';

type TCard = {
  item: Service;
};

const MainCardList = () => {
  const {serviceProvider} = useAppSelector(state => state.serviceProvider);

  const renderItem = useCallback(
    ({item}: TCard) => <Card item={item} />,
    [serviceProvider],
  );

  return (
    <FlatList
      data={serviceProvider || []}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={true}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default MainCardList;
