import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, height, width} from '../../theme/theme';
import Carousel from 'react-native-reanimated-carousel';
import {SLIDER_DATA, FOOD_CATEGORY, RESTAURANTS} from '../../data/slider';
import Header from '../../components/Header/Header';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import MainTitle from '../../components/MainTitle/MainTitle';
import MainCardList from '../../components/MainCardList/MainCardList';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      {/* HEADER */}
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
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

        {/* restaurants */}
        <View>
          <MainTitle title="Рестораны" />
          {/*  CATEGORY  */}

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
        <MainTitle title="Ведущий" />

        <View style={styles.cardListContainer}>
          <MainCardList />
        </View>

        {/*  */}

        <MainTitle title="Певец" />
        <View style={styles.cardListContainer}>
          <MainCardList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
    paddingTop: Platform.OS === 'ios' ? 0 : 16,
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
