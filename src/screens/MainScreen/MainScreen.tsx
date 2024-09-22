import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import {FC, useRef} from 'react';
import {COLORS, width} from '../../theme/theme';
import Header from '../../components/Header/Header';

import {useTranslation} from 'react-i18next';
import {useAppContext} from '../../providers/context/context';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Search from '../../components/Search/Search';
import CategoryButton from '../../components/ScrollButton/CategoryButton';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
import useScrollProgress from '../../common/hooks/useScrollProgress';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';

import useMainScreenRequests from '../../common/hooks/useMainScreenReauests';
import {useAppSelector} from '../../providers/redux/type';
import MainSkeletonLoader from '../../components/Skeletons/MainSkeletonLoader/MainSkeletonLoader';
import React from 'react';

const MainScreen: FC = () => {
  const {banners} = useAppSelector(state => state.banners);
  const {homeData} = useAppSelector(state => state.homeData);
  const {categories} = useAppContext();

  const {mainLoading} = useMainScreenRequests();

  const {t} = useTranslation();

  const scrollCategoryRef = useRef(null);
  const {handleScrollEvents, scrollLength, layoutWidth} = useScrollProgress();

  //loader
  if (mainLoading) {
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
          data={homeData || []}
          ListHeaderComponent={
            <View style={styles.mainScroll}>
              <View style={styles.container}>
                {/* Search */}
                <Search />
                <View style={{paddingHorizontal: 8}}>
                  <ScrollView
                    ref={scrollCategoryRef}
                    horizontal
                    bounces={false}
                    onScroll={handleScrollEvents}
                    showsHorizontalScrollIndicator={false}>
                    {categories &&
                      categories?.map((category, index) => {
                        return (
                          <CategoryButton
                            key={`${category}-${index}`}
                            category={category}
                            index={index}
                          />
                        );
                      })}
                  </ScrollView>
                  <ScrollBar scrollLength={scrollLength} />
                </View>
                {/* SLIDER */}
                <BannerCarousel data={banners} />
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
