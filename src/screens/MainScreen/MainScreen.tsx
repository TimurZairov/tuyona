import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SIZES, height, width} from '../../theme/theme';
import Carousel from 'react-native-reanimated-carousel';
import {SLIDER_DATA, FOOD_CATEGORY, RESTAURANTS} from '../../data/slider';
import Header from '../../components/Header/Header';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import MainTitle from '../../components/MainTitle/MainTitle';
import MainCardList from '../../components/MainCardList/MainCardList';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import {useAppDispatch, useAppSelector} from '../../providers/redux/type';
import {useTranslation} from 'react-i18next';
import {useAppContext} from '../../providers/context/context';
import {getServices} from '../../providers/redux/actions/servicesAction';
import {Banner} from '../../types/types';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const MainScreen = () => {
  const {user} = useAppSelector(state => state.user);
  const {banners} = useAppSelector(state => state.banners);

  const {t} = useTranslation();
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

  const {language, categories} = useAppContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    //get services
    dispatch(getServices({language}));
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      {/* HEADER */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScroll}>
        {/* SLIDER */}
        <View style={styles.container}>
          {/* CHECK width or height app crashes */}
          <Carousel
            loop
            width={screenWidth}
            height={screenHeight / 4}
            mode="parallax"
            autoPlay={true}
            modeConfig={{
              parallaxAdjacentItemScale: 0.75,
              parallaxScrollingOffset: 77,
            }}
            data={banners}
            scrollAnimationDuration={2000}
            renderItem={({item}: {item: Pick<Banner, 'photo'>}) => (
              <View style={styles.sliderCard}>
                <Image source={{uri: item.photo}} style={styles.image} />
              </View>
            )}
          />
        </View>
        <Header />
        {/* restaurants */}
        {/*  CATEGORY  */}

        <View style={{marginTop: 12}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories &&
              categories.map((category, index) => {
                return (
                  <ScrollButton
                    key={`${category}-${index}`}
                    category={category}
                    food
                  />
                );
              })}
          </ScrollView>
        </View>

        <View>
          {/* <MainTitle title={t('restaurants')} /> */}

          {/* restaurants scroll  */}
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 8, paddingTop: 16}}>
            {categories &&
              categories.map((category, index) => {
                return (
                  <CategoryCard
                    key={`${category}-${index}`}
                    category={category}
                  />
                );
              })}
          </ScrollView>
        </View>
        {/* MAIN TITLES */}
        {/* <MainTitle title={t('leading')} /> */}

        {/* <View style={styles.cardListContainer}>
          <MainCardList />
        </View> */}

        {/*  */}

        {/* <MainTitle title={t('singers')} />
        <View style={styles.cardListContainer}>
          <MainCardList />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
  },
  mainScroll: {},

  container: {width: width, height: height / 5},
  sliderCard: {
    width: width,
  },
  image: {
    width: '100%',
    height: height / 5,
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
