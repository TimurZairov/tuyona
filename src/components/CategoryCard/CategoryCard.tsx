import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES, width} from '../../theme/theme';
import MainTitle from '../MainTitle/MainTitle';
import {ICategory} from '../../types/types';

import Card from '../Card/Card';
import ScrollBar from '../ScrollBar/ScrollBar';
import useScrollProgress from '../../common/hooks/useScrollProgress';
import useCard from '../../common/hooks/useCard';
import {useProvidersListQuery} from '../../providers/redux/slices/categoriesListSlice';
import {useAppContext} from '../../providers/context/context';

const CategoryCard: FC<ICategory> = ({category, index, length}) => {
  const {accessToken, language} = useAppContext();
  const {scrollLength, handleScrollEvents, layoutWidth} = useScrollProgress();
  const {addToWishListItems} = useCard();

  const {
    data: providers,
    isFetching,
    error,
  } = useProvidersListQuery({
    id: category.id,
    language,
    token: accessToken,
    isHome: true,
  });

  return (
    <View style={{marginBottom: length && index === length - 1 ? 200 : 0}}>
      <MainTitle title={category?.title} />
      <FlatList
        data={providers?.results || []}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({item, index}) => {
          return (
            <Card key={item.id} item={item} onPress={addToWishListItems} />
          );
        }}
        onScroll={handleScrollEvents}
      />
      {/* ScrollBar */}
      <ScrollBar scrollLength={scrollLength} />
      {/* ADV */}
      {index === 0 ? (
        <View style={styles.adv}>
          <Image source={require('../../assets/image/ADVimage.png')} />
          <View style={styles.advTextContainer}>
            <Text style={styles.advTitle}>Special Offers 😱</Text>
            <Text style={styles.advDesc}>
              We make sure you get the offer you need at best prices
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  adv: {
    width: width - 16,
    padding: 8,
    backgroundColor: COLORS.mainColor,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 8,
    flexDirection: 'row',
    columnGap: 16,
  },
  advTextContainer: {
    width: width / 1.5,
  },
  advTitle: {
    fontSize: SIZES.large,
    fontWeight: '400',
    color: COLORS.blackColor,
  },
  advDesc: {
    fontSize: SIZES.small,
    fontWeight: '200',
    color: COLORS.blackColor,
    marginTop: 6,
  },
});

//fmc
//screen invisible
//favorite providers
//
