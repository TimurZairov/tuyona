import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import {FC, useCallback, useEffect, useRef, useState} from 'react';
import {COLORS, height, width} from '../../theme/theme';
import Header from '../../components/Header/Header';

import {useTranslation} from 'react-i18next';
import {useAppContext} from '../../providers/context/context';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import Search from '../../components/Search/Search';

import CategoryButton from '../../components/ScrollButton/CategoryButton';
import {homeDataAction} from '../../providers/redux/actions/homeDataAction';
import ScrollBar from '../../components/ScrollBar/ScrollBar';
import useScrollProgress from '../../common/hooks/useScrollProgress';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import SlideDots from '../../components/SlideDots/SlideDots';

const MainScreen: FC = () => {
  const {banners} = useAppSelector(state => state.banners);
  const {homeData} = useAppSelector(state => state.homeData);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const {t} = useTranslation();

  const {categories, language} = useAppContext();
  const dispatch = useAppDispatch();
  const scrollCategoryRef = useRef(null);
  const {handleScrollEvents, scrollLength} = useScrollProgress();

  //active slider

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
      {/*  CATEGORY  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.mainScroll}>
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
          <BannerCarousel
            data={banners}
            setActiveSlideIndex={setActiveSlideIndex}
          />
        </View>
        {/* Slide pagination */}
        <SlideDots data={banners} activeSlideIndex={activeSlideIndex} />
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
