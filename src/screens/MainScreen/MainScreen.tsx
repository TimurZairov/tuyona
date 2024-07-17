import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Dimensions,
  Pressable,
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SIZES, height, width} from '../../theme/theme';
import Carousel from 'react-native-reanimated-carousel';
import Header from '../../components/Header/Header';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

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

  console.log(JSON.stringify(categories, null, 2));

  const dispatch = useAppDispatch();
  //open URl
  const openLinkUrl = async (url: string) => {
    if (!url) {
      return;
    }
    await Linking.openURL(url);
  };

  //CHECK IF NEED
  // useEffect(() => {
  //   //get services
  //   dispatch(getServices({language}));
  // }, []);

  return (
    <SafeAreaView style={styles.main}>
      {/* HEADER */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScroll}>
        {/* SLIDER */}
        <View style={styles.container}>
          {/* TODO CHECK TYPES */}
          {banners && banners?.results?.length > 0 && (
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
              data={banners?.results}
              scrollAnimationDuration={2000}
              renderItem={({item}: {item: Banner}) => (
                <Pressable
                  style={styles.sliderCard}
                  onPress={() => openLinkUrl(item.target_url)}>
                  <Image source={{uri: item.photo}} style={styles.image} />
                </Pressable>
              )}
            />
          )}
        </View>
        <Header />

        {/*  CATEGORY  */}
        <View style={{marginTop: 12}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 8}}>
            {categories &&
              categories?.map((category, index) => {
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
          {/* Categories */}
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 8, paddingTop: 16}}>
            {categories &&
              categories?.map((category, index) => {
                return (
                  <CategoryCard
                    key={`${category}-${index}`}
                    category={category}
                  />
                );
              })}
          </ScrollView>
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
