import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Dimensions,
  Pressable,
  Linking,
  Platform,
  FlatList,
  Text,
} from 'react-native';
import React, {FC, memo, useCallback, useEffect, useRef, useState} from 'react';
import {COLORS, SIZES, height, width} from '../../theme/theme';
import Carousel from 'react-native-reanimated-carousel';
import Header from '../../components/Header/Header';

import {useTranslation} from 'react-i18next';
import {useAppContext} from '../../providers/context/context';
import {Banner} from '../../types/types';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import Search from '../../components/Search/Search';

import CategoryButton from '../../components/ScrollButton/CategoryButton';
import {homeDataAction} from '../../providers/redux/actions/homeDataAction';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
import useScrollProgress from '../../common/hooks/useScrollProgress';

const MainScreen: FC = () => {
  const {banners} = useAppSelector(state => state.banners);
  const {homeData} = useAppSelector(state => state.homeData);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const {t} = useTranslation();
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
  const {categories, language} = useAppContext();
  const dispatch = useAppDispatch();
  const scrollCategoryRef = useRef(null);
  const {handleScrollEvents, scrollLength} = useScrollProgress();
  // const carouselRef = useRef(null);

  //
  // const {isLoading} = useServiceProvider();
  //open URl
  const openLinkUrl = async (url: string) => {
    if (!url) {
      return;
    }
    await Linking.openURL(url);
  };

  const setActive = useCallback((index: number) => {
    setActiveSlideIndex(index);
  }, []);

  useEffect(() => {
    dispatch(homeDataAction({endpoint: '/homepage/', language}));
  }, []);

  return (
    <View style={[styles.main]}>
      {/* BACKGROUND */}
      <Image
        style={styles.background}
        source={require('../../assets/image/background.png')}
      />
      {/* HEADER */}
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.mainScroll}>
        <View style={styles.container}>
          {/* Search */}

          <Search />
          {/*  CATEGORY  */}
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
          {banners?.length > 0 && (
            <Carousel
              loop
              width={screenWidth}
              height={screenHeight / 3.4}
              autoPlay={true}
              modeConfig={{
                parallaxAdjacentItemScale: 0.75,
                parallaxScrollingOffset: 77,
              }}
              // ref={carouselRef}
              data={banners}
              scrollAnimationDuration={2000}
              onSnapToItem={index => setActive(index)}
              renderItem={({item}: {item: Banner}) => (
                // console.log(index);
                // console.log(carouselRef?.current);
                <Pressable
                  style={styles.sliderCard}
                  onPress={() => openLinkUrl(item.target_url)}>
                  <Image source={{uri: item.photo}} style={styles.image} />
                </Pressable>
              )}
            />
          )}
        </View>

        {/* Slide pagination */}
        <View style={styles.slidePagination}>
          {banners?.length > 0 &&
            banners?.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dots,
                  {
                    backgroundColor:
                      index === activeSlideIndex
                        ? COLORS.blueColor
                        : COLORS.lightGray,
                  },
                ]}
              />
            ))}
        </View>

        <View>
          {/* Categories */}

          <FlatList
            data={homeData || []}
            renderItem={({item, index}) => {
              return <CategoryCard category={item} index={index} />;
            }}
            contentContainerStyle={{marginBottom: height / 10}}
          />
        </View>
      </ScrollView>
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
  },
  mainScroll: {},

  container: {
    width: width,
    marginBottom: 16,
  },
  sliderCard: {
    width: width,
    height: height / 3,
    marginTop: 16,
    paddingHorizontal: 8,
  },
  slidePagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
  },
  dots: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: height / 3.65,
    borderRadius: SIZES.small,
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

{
  /* <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 8,
            }}>
            {categories.length > 0 &&
              categories?.map((category, index) => {
                return (
                  <CategoryCard
                    key={`${category}-${index}`}
                    category={category}
                  />
                );
              })}
          </ScrollView> */
}
