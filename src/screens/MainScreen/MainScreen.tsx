import {SafeAreaView, StyleSheet, Image, View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES, height, width} from '../../theme/theme';
import Carousel from 'react-native-reanimated-carousel';
import {SLIDER_DATA, ACTORS_CATEGORY} from '../../data/slider';
import Header from '../../components/Header/Header';
import ScrollButton from '../../components/ScrollButton/ScrollButton';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      {/* HEADER */}
      <Header />

      {/* SLIDER */}
      <View style={styles.container}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={SLIDER_DATA}
          scrollAnimationDuration={1000}
          renderItem={({item}) => (
            <View style={styles.sliderCard}>
              <Image source={{uri: item.url}} style={styles.image} />
            </View>
          )}
        />
      </View>
      {/*  CATEGORY  */}
      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ACTORS_CATEGORY.map((actor: string) => {
            return <ScrollButton key={actor} title={actor} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
  },

  container: {width: width, marginTop: 10, height: height / 5},
  sliderCard: {
    width: width - 16,
    marginLeft: 8,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: height / 5,
    borderRadius: SIZES.small,
  },
  scrollContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
