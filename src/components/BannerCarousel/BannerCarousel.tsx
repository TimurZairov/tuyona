import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Linking,
  Dimensions,
} from 'react-native';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Banner} from '../../types/types';
import {height, SIZES, width} from '../../theme/theme';
import SlideDots from '../SlideDots/SlideDots';

interface IBannerCarousel {
  data: Banner[];
  setActiveSlideIndex?: Dispatch<SetStateAction<number>>;
}

const BannerCarousel: FC<IBannerCarousel> = ({data}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  //link for banners
  const openLinkUrl = async (url: string) => {
    if (!url) {
      return;
    }
    await Linking.openURL(url);
  };

  const setActive = useCallback((index: number) => {
    setActiveSlideIndex(index);
  }, []);

  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

  return (
    <View>
      {data?.length > 0 && (
        <Carousel
          loop
          width={screenWidth}
          height={screenHeight / 3.4}
          autoPlay={true}
          modeConfig={{
            parallaxAdjacentItemScale: 0.75,
            parallaxScrollingOffset: 77,
          }}
          data={data}
          scrollAnimationDuration={2000}
          onSnapToItem={index => setActive(index)}
          renderItem={({item}: {item: Banner}) => (
            <Pressable
              style={styles.sliderCard}
              onPress={() => openLinkUrl(item.target_url)}>
              <Image source={{uri: item.photo}} style={styles.image} />
            </Pressable>
          )}
        />
      )}
      {/* Slide pagination */}
      <View style={styles.dots}>
        <SlideDots data={data} activeSlideIndex={activeSlideIndex} />
      </View>
    </View>
  );
};

export default React.memo(BannerCarousel);

const styles = StyleSheet.create({
  sliderCard: {
    width: width,
    height: height / 3,
    marginTop: 16,
    paddingHorizontal: 8,
  },
  image: {
    width: '100%',
    height: height / 3.65,
    borderRadius: SIZES.small,
  },
  dots: {
    marginTop: 10,
  },
});
