import {StyleSheet, Image, View, Platform, FlatList, Text} from 'react-native';
import {FC, useCallback, useRef} from 'react';
import {COLORS, width} from '../../theme/theme';
import Header from '../../components/Header/Header';

import {
  useAdvBannersQuery,
  useCategoriesQuery,
  useHomeDataQuery,
} from '../../providers/redux/slices/apiSlice';

import {useTranslation} from 'react-i18next';
import {useAppContext} from '../../providers/context/context';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Search from '../../components/Search/Search';
import CategoryButton from '../../components/ScrollButton/CategoryButton';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
import useScrollProgress from '../../common/hooks/useScrollProgress';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';

import MainSkeletonLoader from '../../components/Skeletons/MainSkeletonLoader/MainSkeletonLoader';
import React from 'react';

const MainScreen: FC = () => {
  const {language} = useAppContext();

  const {data: homeData, error, isFetching} = useHomeDataQuery(language);
  const {
    data: banners,
    error: bError,
    isFetching: bFetching,
  } = useAdvBannersQuery(undefined);
  const {
    data: categories,
    error: cError,
    isFetching: cIsFetching,
  } = useCategoriesQuery(language);

  const {t} = useTranslation();

  const scrollCategoryRef = useRef(null);
  const {handleScrollEvents, scrollLength, layoutWidth} = useScrollProgress();

  const renderItem = useCallback((item: any, index: number) => {
    return <CategoryButton category={item} index={index} />;
  }, []);

  //error
  if (error || bError || cError) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Ошибка сервера</Text>
      </View>
    );
  }

  //loader
  if (isFetching || bFetching || cIsFetching) {
    return <MainSkeletonLoader />;
  }

  return (
    <View style={[styles.main]}>
      {/* BACKGROUND */}
      <Image
        style={styles.background}
        source={require('../../assets/image/background.png')}
      />
      {/* HEADER */}
      <Header />

      <View>
        {/* Categories */}
        <FlatList
          data={homeData.categories || []}
          ListHeaderComponent={
            <View style={styles.mainScroll}>
              <View style={styles.container}>
                {/* Search */}
                <Search />
                <View style={{paddingHorizontal: 8}}>
                  <FlatList
                    data={categories || []}
                    ref={scrollCategoryRef}
                    onScroll={handleScrollEvents}
                    bounces={false}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => renderItem(item, index)}
                    keyExtractor={item => item.id}
                    initialNumToRender={10}
                    maxToRenderPerBatch={5}
                    windowSize={5}
                  />
                  <ScrollBar scrollLength={scrollLength} />
                </View>
                {/* SLIDER */}
                <BannerCarousel data={banners.results} />
              </View>
            </View>
          }
          renderItem={({item, index}) => {
            return (
              <CategoryCard
                category={item}
                index={index}
                length={homeData.length}
              />
            );
          }}
          removeClippedSubviews={true}
          keyExtractor={item => item.id}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          windowSize={5}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.backGroundWhite,
    paddingTop: Platform.OS == 'android' ? 16 : 0,
  },

  background: {
    position: 'absolute',
    width: width + 10,
    resizeMode: 'cover',
    opacity: 0.3,
  },
  mainScroll: {},

  container: {
    width: width,
    marginBottom: 16,
  },

  scrollContainer: {
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardListContainer: {
    marginBottom: 16,
  },
  categories: {
    justifyContent: 'space-between',
    width: width,
    flexDirection: 'row',
    padding: 8,
  },
});
