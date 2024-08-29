import {FlatList, Image, Platform, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import Card from '../Card/Card';
import {useAppSelector} from '../../providers/redux/type';
import {Service} from '../../types/types';
import {COLORS, width} from '../../theme/theme';
import Header from '../Header/Header';
import Search from '../Search/Search';

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
    <View style={[styles.main]}>
      {/* BACKGROUND */}
      <Image
        style={styles.background}
        source={require('../../assets/image/background.png')}
      />
      {/* HEADER */}
      <Header />
      <FlatList
        data={serviceProvider || []}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={<Search />}
        numColumns={2}
      />
    </View>
  );
};

export default MainCardList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
    paddingTop: Platform.OS == 'android' ? 16 : 0,
  },
  background: {
    position: 'absolute',
    width: width + 10,
    resizeMode: 'cover',
  },
});
