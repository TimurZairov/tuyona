import {SafeAreaView, StyleSheet, Image, View, ScrollView} from 'react-native';
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

const MainScreen = () => {
  const {user} = useAppSelector(state => state.user);
  const {t} = useTranslation();

  const {language} = useAppContext();
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
            width={width}
            height={height / 4}
            mode="parallax"
            autoPlay={true}
            modeConfig={{
              parallaxAdjacentItemScale: 0.75,
              parallaxScrollingOffset: 77,
            }}
            data={SLIDER_DATA}
            scrollAnimationDuration={2000}
            renderItem={({item}) => (
              <View style={styles.sliderCard}>
                <Image source={{uri: item.url}} style={styles.image} />
              </View>
            )}
          />
        </View>
        <Header />
        {/* restaurants */}
        {/*  CATEGORY  */}

        <View style={{marginTop: 12}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {FOOD_CATEGORY.map((category, index) => {
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
          <MainTitle title={t('restaurants')} />

          {/* restaurants scroll  */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {RESTAURANTS.map((res, index) => {
              return (
                <RestaurantCard key={`${res}-${index}`} restaurant={res} />
              );
            })}
          </ScrollView>
        </View>
        {/* MAIN TITLES */}
        <MainTitle title={t('leading')} />

        <View style={styles.cardListContainer}>
          <MainCardList />
        </View>

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
  mainScroll: {
    marginBottom: 16,
  },

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
  cardListContainer: {},
  categories: {
    justifyContent: 'space-between',
    width: width,
    flexDirection: 'row',
    padding: 8,
  },
});
