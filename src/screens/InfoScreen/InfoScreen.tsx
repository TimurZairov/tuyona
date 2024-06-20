import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES, height} from '../../theme/theme';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const InfoScreen = () => {
  return (
    <View style={styles.info}>
      <Image
        source={{
          uri: 'https://repost.uz/storage/uploads/file_5b10456e434296.773592021527793006.jpg',
        }}
        style={styles.image}
      />
      {/* INFO */}
      <View style={styles.container}>
        {/* Service */}
        <Text style={styles.service}>Услуги</Text>
        <ServiceCard />
        <ServiceCard />
      </View>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  info: {
    flex: 1,
    backgroundColor: COLORS.grayColor,
  },
  image: {
    height: height / 2.5,
    borderBottomStartRadius: 20,
    borderEndEndRadius: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  service: {
    paddingVertical: 10,
    fontSize: SIZES.h4.md,
    fontWeight: '800',
  },
  mainTitle: {},
});
